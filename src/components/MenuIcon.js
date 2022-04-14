import React from "react";
import "./menuicon.css";
import { useState, useEffect } from "react";

const Burger = ({ open, setOpen }) => {
  const [menuicon, setMenuicon] = useState("menuicon");
  const [primary, setPrimary] = useState("#FFF");
  const [secondary, setSecondary] = useState("#03A9F4");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 100) {
      return setSecondary("#03A9F4");
    } else if (window.scrollY < 600) {
      return setSecondary("#FFF");
    } else if (window.scrollY > 600) {
      return setSecondary("#03A9F4");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={menuicon} open={open} onClick={() => setOpen(!open)}>
      <div
        style={{
          transform: open ? "rotate(45deg)" : "rotate(0)",
          backgroundColor: open ? primary : secondary,
        }}
      />
      <div
        style={{
          opacity: open ? "0" : "1",
          backgroundColor: open ? primary : secondary,
        }}
      />
      <div
        style={{
          transform: open ? "rotate(-45deg)" : "rotate(0)",
          backgroundColor: open ? primary : secondary,
        }}
      />
    </div>
  );
};

export default Burger;
