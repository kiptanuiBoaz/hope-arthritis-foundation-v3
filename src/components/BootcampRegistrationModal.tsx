import React, { useState } from "react";

interface BootcampRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BootcampRegistrationModal: React.FC<BootcampRegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<"registration" | "payment">("registration");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    cadre: "",
    experience: "",
    institution: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentProceed = () => {
    // Here you would typically handle the payment processing or redirect
    alert("Payment processing would occur here");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
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

        {step === "registration" ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              Fill in your information below
            </h2>
            <form onSubmit={handleProceedToPayment} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    className="w-full rounded p-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    className="w-full rounded p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="w-full p-3 border rounded border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <div className="flex items-center justify-center px-3 bg-gray-50 border-r border-gray-300 h-full">
                    <span className="flag-icon flag-icon-ke">🇰🇪</span>
                    <span className="ml-2">+254</span>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="flex-1 p-3 border-0 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent rounded-r-lg"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country *"
                    required
                    className="w-full p-3 border rounded border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <select
                    name="cadre"
                    className="w-full p-3 border rounded border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent  bg-white"
                    value={formData.cadre}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Cadre</option>
                    <option value="General Practitioner">Pediatrician</option>
                    <option value="General Practitioner">
                      General Practitioner
                    </option>
                    <option value="Doctor (Specialist/Consultant)">
                      Doctor (Specialist/Consultant)
                    </option>
                    <option value="Nurse">Nurse</option>
                    <option value="Clinical Officer">Clinical Officer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <select
                    name="experience"
                    className="w-full p-3 border rounded border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent  bg-white"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution *"
                    required
                    className="w-full p-3 border rounded border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.institution}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="pt-2">
                <p className="text-gray-700 mb-2">Payment For</p>
                <div className="p-3 rounded bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="font-medium">
                    A Bedside Clinician's Delight- Paediatric Rheumatology
                    (ABCD-PR) Bootcamp
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-gray-700 mb-2">Amount</p>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="font-medium">KSH 10400 / USD 80</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className=" rounded w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  REGISTER & PROCEED TO PAYMENT
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center my-6">
              Payment Options
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Lipa na Mpesa</h3>
              <div className="space-y-3">
                <p className="flex justify-between">
                  <span className="text-gray-600">Paybill No:</span>
                  <span className="font-bold">522533</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Account No:</span>
                  <span className="font-bold ">7657905</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold">Ksh 10400</span>
                </p>
              </div>

              <div className="mt-6">
                <p className="text-gray-700 mb-4">
                  <span className="font-bold">Note:</span> Once you make the
                  payment successfully, kindly forward the payment details with
                  your name to bootcamp@hopearthritisfoundation.com
                </p>
                <button
                  onClick={handlePaymentProceed}
                  className="rounded w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 transition-colors"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BootcampRegistrationModal;
