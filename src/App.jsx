import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import GlowCursor from "./components/GlowCursor";
import SkyBackground from "./components/SkyBackground";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Layout = ({ children, isDay, setIsDay }) => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/contact";

  return (
    <>
      <SkyBackground isDay={isDay} />
      <GlowCursor isDay={isDay} />
      {showSidebar && <Sidebar isDay={isDay} />}
      <Navbar isDay={isDay} toggleDay={() => setIsDay((prev) => !prev)} />

      <div
        className={`ml-32 pt-16 transition-colors duration-700 ${
          isDay ? "text-gray-900" : "text-gray-100"
        }`}
      >
        {children}
      </div>
    </>
  );
};

const App = () => {
  const [isDay, setIsDay] = useState(() => {
    const stored = localStorage.getItem("isDay");
    return stored !== null ? JSON.parse(stored) : true;
  });

  // Whenever isDay changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("isDay", JSON.stringify(isDay));
  }, [isDay]);

  return (
    <Router>
      <Layout isDay={isDay} setIsDay={setIsDay}>
        <Routes>
          <Route path="/" element={<Home isDay={isDay} />} />
          <Route path="/projects" element={<Projects isDay={isDay} />} />
          <Route path="/contact" element={<Contact isDay={isDay} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;