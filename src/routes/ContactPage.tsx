import React from "react";

const Contact = React.lazy(() => import("../components/Contact"));

const ContactPage: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="pt-24 bg-gray-50">
        <Contact />
      </div>
    </React.Suspense>
  );
};

export default ContactPage;
