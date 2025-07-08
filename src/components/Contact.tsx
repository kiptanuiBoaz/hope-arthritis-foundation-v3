import type React from "react";
import { useState } from "react";
import axios from "axios";
import DonationModal from "./DonationModal";
import { subscribeToMailchimp } from "../utils/subscribeEmail";
import { generateEmailTemplate } from "../emails/contact-email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission with Mandrill
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const mandrillApiKey = import.meta.env.VITE_MANDRILL_API_KEY;
    const message = {
      subject: "New Feedback Form Submission",
      from_email: "website-contact@hopearthritisfoundation.com",
      to: [{ email: "masterclass@hopearthritisfoundation.com", type: "to" }],
      html: generateEmailTemplate(formData),
    };

    try {
      await axios.post("https://mandrillapp.com/api/1.0/messages/send.json", {
        key: mandrillApiKey,
        message: message,
      });
      await subscribeToMailchimp({
        email: formData.email,
        firstName: formData.name,
        lastName: "",
        phone: "",
        tags: "contact_form",
      });
      setFormData({ name: "", email: "", message: "" });
      setSuccessOpen(true);
    } catch (error) {
      console.error("There was an error sending the email", error);
      setFailureOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-title">Contact Us</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6" />
          <p className="text-gray-600">Please write to us.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="rounded-xl w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {/* Success and Failure Notifications */}
              {successOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center">
                    <div className="bg-green-100 rounded-full p-4 mb-4">
                      <svg
                        className="h-10 w-10 text-green-600"
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
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      Thank you for your message!
                    </h3>
                    <p className="text-gray-700 text-center mb-4">
                      We will get back to you soon.
                    </p>
                    <button
                      onClick={() => setSuccessOpen(false)}
                      className="px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
              {failureOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center">
                    <div className="bg-red-100 rounded-full p-4 mb-4">
                      <svg
                        className="h-10 w-10 text-red-600"
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
                    </div>
                    <h3 className="text-xl font-bold text-red-700 mb-2">
                      Oops! Something went wrong.
                    </h3>
                    <p className="text-gray-700 text-center mb-4">
                      There was an error sending your message. Please try again
                      later.
                    </p>
                    <button
                      onClick={() => setFailureOpen(false)}
                      className="px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">
                A Holistic Intervention to Paediatric Rheumatology
              </h3>

              <div className="text-gray-600 mb-6">
                <p className="mb-2">
                  Hurlingham Park Building, Office Suite B6, 3rd Floor Off
                  Argwings Kodhek Road, Hurlingham.
                </p>
                <p>Registration Number: OP.218/051/21-382/12509</p>
              </div>

              {/* <h4 className="font-bold mb-2">Contacts:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>0769-488751</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Info@hopearthritisfoundation.com</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>P.O. Box 76123-00508, Nairobi, KE</span>
                </li>
              </ul> */}
            </div>

            <div className="bg-gradient-to-br from-orange-100/80 to-cyan-500/10 p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Support Our Fight Against Childhood Arthritis
              </h3>
              <p className="text-gray-700 mb-4">
                Help us fund research and provide care for those suffering from
                arthritis. Your support makes a difference.
              </p>
              <button
                className="btn-primary"
                onClick={() => setIsDonationOpen(true)}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />
    </section>
  );
};

export default Contact;
