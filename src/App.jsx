import React from "react";
// import "./App.css";
import Nevbar from "./Components/Nevbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Components/AboutUs";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Nevbar />
        <div className="flex-1 bg-blue-50">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
