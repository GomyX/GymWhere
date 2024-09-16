import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Slider from "./Slider";

import "./Demo.css";
import Voucher from "./Voucher";

function Demo() {
  return (
    <div className="parent">
      <div className="left-section">
        <Nav />
        <Hero />
        <Voucher />
      </div>
      <div className="right-section">
        <Slider />
      </div>
    </div>
  );
}

export default Demo;
