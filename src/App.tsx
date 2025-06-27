import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
const NewsAndActivities = React.lazy(() => import("./pages/NewsAndActivities"));
const ActivityDetail = React.lazy(() => import("./pages/ActivityDetail"));
const TeamDetail = React.lazy(() => import("./pages/TeamDetail"));
const PatientInformation = React.lazy(() => import("./pages/PatientInformation"));
const Home = React.lazy(() => import("./pages/Home"));
const ContactPage = React.lazy(() => import("./routes/ContactPage"));
const TeamAll = React.lazy(() => import("./pages/TeamAll"));
const Founder = React.lazy(() => import("./pages/Founder"));
const Gallery = React.lazy(() => import("./pages/Gallery"));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <React.Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activities" element={<NewsAndActivities />} />
              <Route path="/activities/:id" element={<ActivityDetail />} />
              <Route path="/team" element={<TeamAll />} />
              <Route path="/team/:id" element={<TeamDetail />} />
              <Route path="/founder" element={<Founder />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/patient-information" element={<PatientInformation />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;