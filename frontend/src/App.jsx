import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LeadCapturePage from "./pages/LeadCapturePage.jsx";
import Dashboard from "./pages/Dashboard";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/apply" element={<LeadCapturePage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;