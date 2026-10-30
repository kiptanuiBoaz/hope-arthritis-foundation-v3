import React, { useState, useRef, useEffect } from "react";
import { PaystackButton } from "react-paystack";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MIN_DONATION = 1000;
const SUBMISSION_COOLDOWN = 10_000;

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  const cooldownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
      }
    };
  }, []);

  // Honeypot field
  const [website, setWebsite] = useState("");

  // Prevent rapid successive submissions
  const lastSubmissionRef = useRef(0);

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const parsedAmount = Number(amount);

  const isValidAmount =
    amount.trim() !== "" &&
    Number.isFinite(parsedAmount) &&
    parsedAmount >= MIN_DONATION;

  const isValidPhone = phoneNumber.trim().length > 0;

  const handlePaymentAttempt = (): boolean => {
    // Block bots that fill the hidden field
    if (website.trim() !== "") {
      return false;
    }

    // Validate donation amount and phone
    if (!isValidPhone || !isValidAmount) {
      return false;
    }

    // Prevent successive payment attempts
    const now = Date.now();

    if (now - lastSubmissionRef.current < SUBMISSION_COOLDOWN) {
      return false;
    }

    lastSubmissionRef.current = now;
    setIsSubmitting(true);

    return true;
  };

  const handleModalClose = () => {
    if (cooldownTimerRef.current) {
      clearTimeout(cooldownTimerRef.current);
    }

    onClose();
    setDonationSuccess(false);
    setPhoneNumber("");
    setAmount("");
    setWebsite("");
    setIsSubmitting(false);
    setIsCoolingDown(false);
  };

  const paystackProps = {
    email: phoneNumber
      ? `${phoneNumber}@donor.com`
      : "donor@hopearthritisfoundation.com",
    amount: isValidAmount ? Math.round(parsedAmount * 100) : 0,
    currency: "KES",
    metadata: {
      custom_fields: [
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phoneNumber,
        },
      ],
    },
    publicKey,
    text: isSubmitting ? "Processing..." : "Donate Now",
    onSuccess: () => {
      setDonationSuccess(true);
      setIsSubmitting(false);
    },
    onClose: () => {
      setIsSubmitting(false);
    },
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-xl w-full shadow-2xl relative">
        <button
          type="button"
          onClick={handleModalClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors"
          aria-label="Close donation modal"
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
              {/* Honeypot: hidden from legitimate users */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] w-1 h-1 overflow-hidden"
              >
                <label htmlFor="website">Leave this field empty</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

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
                  placeholder="Enter amount (minimum KES 1,000)"
                  min={MIN_DONATION}
                  step="1"
                  required
                />

                {amount && !isValidAmount && (
                  <p className="text-sm text-red-600 mt-2">
                    The minimum donation amount is KES 1,000.
                  </p>
                )}
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
                    // onClick={() => handlePaymentAttempt()}
                    className="w-full py-3 px-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                    disabled={
                      !isValidPhone ||
                      !isValidAmount ||
                      isSubmitting ||
                      isCoolingDown ||
                      website.trim() !== ""
                    }
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
