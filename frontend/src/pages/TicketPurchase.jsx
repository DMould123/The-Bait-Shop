import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NpuV8JiXV88granpu14IbP89g0Tn2YLNmAjvNZffbDkbpUFpDNEiBDt9o9ACUS2rozL6UvLLLQV55miUOUIURPx00D7luQrbY');

const TicketPurchase = () => {
  const location = useLocation();
  const { tickets } = location.state || {};

  console.log(tickets); // Check if tickets are correctly passed

  const handleCheckout = async () => {
    console.log("Checkout button clicked");
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: [{ name: tickets.artist, price: parseFloat(tickets.price.replace('$', '')), quantity: 1 }] }),
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h1>Purchase Tickets for {tickets.artist}</h1>
      <p>Date: {tickets.date}</p>
      <p>Price: {tickets.price}</p>
      <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg flex items-center text-sm sm:text-lg mx-auto" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default TicketPurchase;
