import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import {
  sendEmailJSToClient,
  sendMandrillEmailToMailbox,
  sendSuccessEmailToMailbox,
} from "../emails/bootcamp-emails";
import { subscribeToMailchimp } from "../utils/subscribeEmail";

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
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");

  // Validation
  const isEmailValid = (email: string) => /.+@.+\..+/.test(email);
  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    isEmailValid(formData.email) &&
    formData.phoneNumber.trim() !== "" &&
    formData.country.trim() !== "" &&
    formData.cadre.trim() !== "" &&
    formData.experience.trim() !== "" &&
    formData.institution.trim() !== "";

  // Prepare data for email functions
  const getEmailPayload = (paid: boolean) => ({
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    phone_number: formData.phoneNumber,
    country: formData.country,
    cadre: formData.cadre,
    experience: formData.experience,
    institution: formData.institution,
    amount_view: "KSH 13000 / USD 100",
    status: paid ? "Payment processed!" : "Not Paid!",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Registration submit handler
  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    try {
      // Backend call
      await subscribeToMailchimp({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phoneNumber,
        tags: "bootcamp",
      });
      // Send pre-payment emails
      await sendEmailJSToClient(
        getEmailPayload(false),
        false,
        setFailureOpen,
        setSnackbarText
      );
      await sendMandrillEmailToMailbox(
        getEmailPayload(false),
        setSuccessOpen,
        setSnackbarText
      );
      setStep("payment");
    } catch (error) {
      setFailureOpen(true);
      setSnackbarText("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Payment step handler
  const handlePaymentProceed = async () => {
    setLoading(true);
    try {
      // Send post-payment emails
      await sendEmailJSToClient(
        getEmailPayload(true),
        true,
        setFailureOpen,
        setSnackbarText
      );
      await sendSuccessEmailToMailbox(
        getEmailPayload(true),
        setFailureOpen,
        setSnackbarText
      );
      setSuccessOpen(true);
      setSnackbarText("Payment completed and emails sent successfully.");
      onClose();
    } catch (error) {
      setFailureOpen(true);
      setSnackbarText(
        "Payment completed but failed to send post-payment emails."
      );
    } finally {
      setLoading(false);
    }
  };

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  formData.email || "bootcamp@hopearthritisfoundation.com";
  const paystackProps = {
    email: "bootcamp@hopearthritisfoundation.com",
    amount: 13000 * 100, // 13000 KES in cents (adjust as needed for your Paystack config)
    currency: "KES",
    metadata: {
      name: "A Bedside Clinician's Delight- Paediatric Rheumatology (ABCD-PR) Bootcamp",
      phone: formData.phoneNumber,
      custom_fields: {},
    },
    publicKey,
    text: "Proceed to Pay",
    onSuccess: async (data: any) => {
      await handlePaymentProceed();
    },
    onClose: () => alert("Payment closed!"),
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
                  <p className="font-medium">KSH 13000 / USD 100</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className={`rounded w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors ${!isFormValid || loading ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={!isFormValid || loading}
                >
                  {loading ? "Processing..." : "REGISTER & PROCEED TO PAYMENT"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center my-6">
              Pay Online (Paystack)
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center">
              <h4 className="text-lg font-sans pb-4 font-bold underline">
                Lipa na Mpesa
              </h4>
              <h6 className="text-md font-sans pb-2">Paybill No: 522533</h6>
              <h6 className="text-md font-sans pb-2">Account No: 7657905</h6>
              <h6 className="text-md font-sans pb-4">Amount: Ksh 13000</h6>
              <h6 className="text-md font-sans mb-2">
                <span className="underline">Note: </span>
                Once you make the payment succesfully. Kindly forward the
                payment details with your name to
                bootcamp@hopearthritisfoundation.com
              </h6>
              <p className="mb-4 text-gray-700">
                Click below to pay securely online. After payment, you will
                receive a confirmation email.
              </p>
              {/* @ts-ignore */}
              <PaystackButton
                {...paystackProps}
                className="rounded w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 transition-colors text-lg"
                disabled={loading}
              />
              <p className="text-gray-600 text-sm mt-6">
                If you have any issues, contact{" "}
                <a
                  href="mailto:bootcamp@hopearthritisfoundation.com"
                  className="underline"
                >
                  bootcamp@hopearthritisfoundation.com
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BootcampRegistrationModal;
