import { useLocation, useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51NpuV8JiXV88granpu14IbP89g0Tn2YLNmAjvNZffbDkbpUFpDNEiBDt9o9ACUS2rozL6UvLLLQV55miUOUIURPx00D7luQrbY'
)

const TicketPurchase = () => {
  const location = useLocation()
  const { tickets } = location.state || {}
  const navigate = useNavigate()

  console.log(tickets)

  const handleCheckout = async () => {
    console.log('Checkout button clicked')
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
              quantity: 1
            }
          ]
        })
      }
    )

    const session = await response.json()
    const result = await stripe.redirectToCheckout({ sessionId: session.id })

    if (result.error) {
      console.error(result.error.message)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Purchase Tickets for {tickets.artist}</h1>
      <p>Date: {tickets.date}</p>
      <p>Time: {tickets.time}</p>
      <p>Price: {tickets.price}</p>
      <p className="mt-4"><strong>Description:</strong> {tickets.blurb}</p>

      {tickets.yt && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Watch on YouTube:</h2>
          <iframe
            width="50%"
            height="315"
            src={tickets.yt.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="mt-4">
        <button
          className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default TicketPurchase
