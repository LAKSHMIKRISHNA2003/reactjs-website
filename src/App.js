import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Topbar from "./components/topbar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import About from "./components/About"; // Import About page component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Header />
        <Navbar />

        {/* Use Routes and Route in React Router v6 */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={
            <>
              <Hero />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
            </>
          } />
          
          {/* Route for About Page */}
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
