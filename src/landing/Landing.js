import React from "react";
import Navbar from "../components/Navbar";
import Intro from "./Intro";
import "./Landing.css";
import Features from "./Features";
import Gyms from "./Gyms";
import Pricing from "./Pricing";
import Footer from "./Footer";

function Landing() {
  return (
    <div>
      <div className="landing">
        <Navbar />
        <Intro />
      </div>
      <Features />
      <Gyms />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Landing;
