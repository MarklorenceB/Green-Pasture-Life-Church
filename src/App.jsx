import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Contact from "./pages/Contact";

// ScrollToTop component to ensure pages start at the top on navigation
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MinistryDetail from "./pages/MinistryDetail";
import Leaders from "./pages/Leaders";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/ministries/:id" element={<MinistryDetail />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
