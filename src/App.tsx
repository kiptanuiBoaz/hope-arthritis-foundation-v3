import React from "react";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeaturedArticles from "./components/FeaturedArticles";

// Pages
const NewsAndActivities = React.lazy(() => import("./pages/NewsAndActivities"));
const ActivityDetail = React.lazy(() => import("./pages/ActivityDetail"));
const TeamDetail = React.lazy(() => import("./pages/TeamDetail"));
const PatientInformation = React.lazy(
  () => import("./pages/PatientInformation")
);
const Home = React.lazy(() => import("./pages/Home"));
const ContactPage = React.lazy(() => import("./routes/ContactPage"));
const TeamAll = React.lazy(() => import("./pages/TeamAll"));
const Founder = React.lazy(() => import("./pages/Founder"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const BootCampRegistration = React.lazy(
  () => import("./pages/BootCampRegistration")
);
const RheumaFest = React.lazy(() => import("./pages/RheumaFest"));
const Articles = React.lazy(() => import("./pages/Articles"));

function App() {
  const location = window.location.pathname;
  console.log(location);
  const hideNavbar = location === "/rheuma-fest";
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        {!hideNavbar && <Navbar />}
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
              <Route
                path="/pediatric-arthritis-recognizing-the-signs-and-taking-action-early"
                element={<Articles />}
              />
              <Route
                path="/patient-information"
                element={<PatientInformation />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/bootcamp-registration"
                element={<BootCampRegistration />}
              />
              <Route path="/rheuma-fest" element={<RheumaFest />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
