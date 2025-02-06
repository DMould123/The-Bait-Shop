import { useLocation, useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { formatDate } from '../utils/dateUtils'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function TicketPurchase() {
  const location = useLocation()
  const { tickets } = location.state || {}
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()

  const handleCheckout = async () => {
    if (tickets.artist === 'Death Cab for Cutie') {
      alert('Tickets for this concert are sold out.')
      return
    }

    try {
      const stripe = await stripePromise

      const response = await fetch(
        'http://localhost:3001/create-checkout-session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            items: [
              {
                name: tickets.artist,
                price: parseFloat(tickets.price.replace('$', '')),
                quantity: quantity
              }
            ]
          })
        }
      )

      if (!response.ok) {
        throw new Error(
          `Failed to create checkout session: ${response.statusText}`
        )
      }

      const session = await response.json()

      if (!session.id) {
        throw new Error('Invalid session ID received from server.')
      }

      const result = await stripe.redirectToCheckout({ sessionId: session.id })

      if (result.error) {
        console.error('Stripe checkout error:', result.error.message)
        alert('Error redirecting to checkout: ' + result.error.message)
      }
    } catch (error) {
      console.error('Checkout Error:', error)
      alert('An error occurred during checkout: ' + error.message)
    }
  }

  const handleQuantityChange = (e) => {
    const value = Math.min(Math.max(1, e.target.value), 20)
    setQuantity(value)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{tickets.artist}</h1>
      <p>Date: {formatDate(tickets.date)}</p>
      <p>Time: {tickets.time}</p>
      <p>Price: {tickets.price}</p>
      <p className="mt-4"> {tickets.blurb}</p>

      {tickets.yt && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Watch on YouTube:</h2>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={tickets.yt.replace('watch?v=', 'embed/')}
              title="YouTube video player"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {tickets.artist === 'Death Cab for Cutie' && (
        <div className="mt-4 text-red-600 font-bold text-2xl">
          This concert is sold out.
        </div>
      )}

      <div className="mt-4">
        <label htmlFor="quantity" className="block text-lg font-semibold">
          Quantity:
        </label>
        <div className="flex items-center mt-2">
          {tickets.artist === 'Death Cab for Cutie' ? (
            <span className="border border-gray-300 rounded-lg py-2 px-3 w-20 text-center">
              -
            </span>
          ) : (
            <input
              type="number"
              id="quantity"
              min="1"
              max="20"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 rounded-lg py-2 px-3 w-20 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              aria-label="Select ticket quantity"
            />
          )}
        </div>
      </div>

      <div className="mt-4">
        <button
          className={`bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg ${
            tickets.artist === 'Death Cab for Cutie'
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          onClick={handleCheckout}
          disabled={tickets.artist === 'Death Cab for Cutie'}
        >
          {tickets.artist === 'Death Cab for Cutie'
            ? 'Sold Out'
            : 'Proceed to Checkout'}
        </button>
      </div>

      <div className="bg-100 p-4 rounded-lg mt-2 overflow-hidden">
        <div className="whitespace-nowrap overflow-hidden">
          <ul className="inline-flex animate-marquee">
            {fullCalendar
              .slice()
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((event) => (
                <li key={event.id} className="mx-4 text-gray-800 uppercase text-lg md:text-gray-700">
                  <span className="font-extrabold">{event.artist}</span> -{' '}
                  {formatDate(event.date)} at {event.time}
                  {event.artist === 'Death Cab for Cutie' && (
                    <span className="text-red-500 font-bold">
                      {' '}
                      (SOLD OUT)
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
