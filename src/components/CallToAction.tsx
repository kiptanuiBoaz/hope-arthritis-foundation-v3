import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import DonationModal from "./DonationModal";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [donationSuccess, setDonationSuccess] = useState(false);

  const scrollToIntroForms = () => {
    const element = document.getElementById("intro-forms");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const paystackProps = {
    email: phoneNumber
      ? `${phoneNumber}@donor.com`
      : "donor@hopearthritisfoundation.com",
    amount: amount ? parseInt(amount) * 100 : 0, // Paystack expects amount in kobo (for NGN) or cents (for USD/KES)
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
    setIsModalOpen(false);
    setDonationSuccess(false);
    setPhoneNumber("");
    setAmount("");
  };

  return (
    <>
      <section
        id="donate-call-to-action"
        className="section bg-gradient-to-r from-orange-500 to-cyan-500 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leading The Way in Childhood Arthritis
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              Promoting holistic healthcare to children with rheumatic diseases
              across Africa and the globe through mentorship, academic
              leadership, and offering psychosocial support to their families.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={scrollToIntroForms}
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-medium py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CallToAction;
