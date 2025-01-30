import { useNavigate } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Cancel() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <AiOutlineCloseCircle className="w-20 h-20 text-red-500" />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">
        Payment Cancelled
      </h1>
      <p className="text-gray-600 mt-2 text-lg sm:text-xl">
        Your transaction was not completed. Please try again.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-gray-800 hover:bg-gray-900 text-white py-3 px-8 rounded-lg text-lg sm:text-xl transition"
      >
        Return to Homepage
      </button>
    </div>
  )
}
