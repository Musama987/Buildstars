import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import THEME from "../../../state/theme";

const BUTTON_TYPES = {
  // --- All the old styles are still here ---
  solid_color_tb: {
    background: THEME.color,
    borderColor: THEME.color,
    color: "#000",
  },
  solid_color_tw: {
    background: THEME.color,
    borderColor: THEME.color,
    color: "#fff",
  },
  solid_black_tw: {
    background: "rgb(40,40,50)",
    borderColor: "rgb(40,40,50)",
    color: "#fff",
  },
  solid_white_tb: {
    background: "#fff",
    borderColor: "#fff",
    color: "#000",
  },
  solid_gray_tb: {
    background: "#e6e6e6",
    borderColor: "#e6e6e6",
    color: "#000",
  },
  outline_color_tb: {
    background: "transparent",
    borderColor: THEME.color,
    color: "#000",
  },
  outline_color_tw: {
    background: "transparent",
    borderColor: THEME.color,
    color: "#fff",
  },
  outline_black_tb: {
    background: "transparent",
    borderColor: "#000",
    color: "#000",
  },
  outline_black_tc: {
    background: "transparent",
    borderColor: "#000",
    color: THEME.color,
  },
  outline_white_tw: {
    background: "transparent",
    borderColor: "#fff",
    color: "#fff",
  },
  outline_white_tc: {
    background: "transparent",
    borderColor: "#fff",
    color: THEME.color,
  },
  outline_gray_tb: {
    background: "transparent",
    borderColor: "#e6e6e6",
    color: "#000",
  },
  // ✅ --- ADDING THE NEW STYLES HERE --- ✅
  "outline-orange-ot": { // Orange Text, Orange Border
    background: "transparent",
    borderColor: THEME.color,
    color: THEME.color, 
  },
  "solid-orange-wt": { // White Text, Orange Background
    background: THEME.color,
    borderColor: THEME.color,
    color: "#181717ff",
  },
};

export default ({
  children,
  before,
  after,
  type = "solid-color-tb",
  hoverType = "outline-color-tb",
  round,
  small,
  click,
  to = "#",
}) => {
  const [hover, setHover] = useState(false);
  const [styleStatic, setStyleStatic] = useState(null);
  const [styleHover, setStyleHover] = useState(null);

  useEffect(() => {
    setStyleStatic(BUTTON_TYPES[type] || BUTTON_TYPES.solid_color_tb);
    setStyleHover(BUTTON_TYPES[hoverType] || BUTTON_TYPES.solid_color_tb);
  }, [type, hoverType]);

  return (
    <Link
      onMouseEnter={() => setHover(true)} // Corrected hover logic
      onMouseLeave={() => setHover(false)} // Corrected hover logic
      className={[
        styles.button,
        children ? styles.text : styles.icon,
        round && styles.round,
        small && styles.small,
      ]
        .filter(Boolean)
        .join(" ")}
      data-after={after}
      data-before={before}
      style={hover ? styleHover : styleStatic}
      to={to}
      onClick={click}
    >
      {children}
    </Link>
  );
};