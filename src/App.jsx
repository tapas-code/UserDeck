import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    // Setting up Router for navigation
    <Router>
      <div className="min-h-screen flex flex-col bg-zinc-900">
        <Navbar onSearch={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users searchQuery={searchQuery} />} /> {/* Users component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
