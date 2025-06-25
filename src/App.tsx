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
const PatientResources = React.lazy(() => import("./pages/PatientResources"));
const Home = React.lazy(() => import("./pages/Home"));
const ContactPage = React.lazy(() => import("./routes/ContactPage"));
const TeamAll = React.lazy(() => import("./pages/TeamAll"));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <React.Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                Loading ...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activities" element={<NewsAndActivities />} />
              <Route path="/activities/:id" element={<ActivityDetail />} />
              <Route path="/team" element={<TeamAll />} />
              <Route path="/team/:id" element={<TeamDetail />} />
              <Route path="/resources" element={<PatientResources />} />
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
