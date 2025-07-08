import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [donationSuccess, setDonationSuccess] = useState(false);

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const paystackProps = {
    email: phoneNumber
      ? `${phoneNumber}@donor.com`
      : "donor@hopearthritisfoundation.com",
    amount: amount ? parseInt(amount) * 100 : 0,
    currency: "KES",
    metadata: {
      custom_fields: [
        { display_name: "Phone", variable_name: "phone", value: phoneNumber },
      ],
    },
    publicKey,
    text: "Donate Now",
    onSuccess: () => {
      setDonationSuccess(true);
    },
    onClose: () => {},
  };

  const handleModalClose = () => {
    onClose();
    setDonationSuccess(false);
    setPhoneNumber("");
    setAmount("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-xl w-full shadow-2xl relative">
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {!donationSuccess ? (
          <>
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Make a Donation
              </h3>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Amount (KES)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Enter amount"
                  min="1"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="flex-1 py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Cancel
                </button>
                <div className="flex-1">
                  <PaystackButton
                    {...paystackProps}
                    className="w-full py-3 px-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                    disabled={!phoneNumber || !amount || parseInt(amount) < 1}
                  />
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg
                className="h-12 w-12 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Thank you for your donation!
            </h3>
            <p className="text-gray-700 text-center">
              Your support helps us make a difference in the lives of children
              with rheumatic diseases.
            </p>
            <button
              onClick={handleModalClose}
              className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationModal;
