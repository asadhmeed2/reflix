import React from "react";
import { Navbar } from "./Navbar";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Logo />
    </div>
  );
};
