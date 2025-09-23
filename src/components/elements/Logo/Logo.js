import React from "react";
import styles from "./Logo.module.scss";
import THEME from "../../../state/theme";
// 1. Import your logo image
import logoImage from "../../../assets/placeholders/ararat_bouw.png";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
    style={{ borderColor: THEME.color }}
  >
    {/* <i className="las la-industry" /> */}
    <span>
      {/* Build<b>Starssss.</b> */}
      <img src={logoImage} alt="Ararat Bouw Logo" />
    </span>
  </figure>
);
