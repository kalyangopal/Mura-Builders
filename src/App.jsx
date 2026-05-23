import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Services from "./Routes/Services";
import Projects from "./Routes/Projects";
import Reviews from "./Routes/Reviews";
import Contact from "./Routes/Contacts";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;