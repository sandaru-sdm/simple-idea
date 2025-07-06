import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="simple-idea-website bg-dark text-white">
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <BrowserRouter basename="/simple-idea">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;