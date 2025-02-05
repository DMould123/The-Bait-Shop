import { useState } from 'react';
import { FaQuestionCircle, FaParking, FaCamera, FaCreditCard, FaPhone } from 'react-icons/fa';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        {[
          {
            question: "What is the age policy for events?",
            answer: "Most events at our venue are 18+ unless otherwise specified. Some shows may be all-ages, so please check the event details for specific age restrictions.",
            icon: <FaQuestionCircle className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "Can I bring my own food and drinks?",
            answer: "Outside food and beverages are not allowed in the venue. However, we offer a variety of food and drink options at our concession stands.",
            icon: <FaCamera className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "What time do doors open for events?",
            answer: "Doors typically open one hour before the event starts. For specific events, please refer to the event page for exact times.",
            icon: <FaParking className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "Is there parking available at the venue?",
            answer: "Yes, we have a parking lot available for guests. Parking is first-come, first-served, and we recommend arriving early to secure a spot.",
            icon: <FaParking className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "What should I do if I lost something at the venue?",
            answer: "If you lose an item during an event, please visit our box office or contact our lost and found department. We will do our best to help you recover your belongings.",
            icon: <FaQuestionCircle className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "Can I take photos or videos during the show?",
            answer: "Photography policies vary by artist. Generally, personal cameras are allowed, but professional equipment and video recording are prohibited. Please check the event details for specific guidelines.",
            icon: <FaCamera className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit cards, debit cards, and mobile payment options like Apple Pay and Google Pay.",
            icon: <FaCreditCard className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "Can I get a refund for my tickets?",
            answer: "Ticket refunds are subject to our refund policy. Please refer to the event page for specific details regarding refunds and exchanges.",
            icon: <FaQuestionCircle className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "Are there any age restrictions for specific events?",
            answer: "Some events may have specific age restrictions. Please check the event details for more information.",
            icon: <FaQuestionCircle className="inline-block mr-2 text-blue-600" />
          },
          {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support team via our contact page on the website or by calling our box office during business hours.",
            icon: <FaPhone className="inline-block mr-2 text-blue-600" />
          },
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex items-center cursor-pointer p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
              onClick={() => toggleAccordion(index)}
            >
              {item.icon}
              <h2 className="text-xl font-semibold">{item.question}</h2>
            </div>
            {openIndex === index && (
              <p className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded-lg mt-2">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
