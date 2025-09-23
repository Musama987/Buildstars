import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

export default ({ children, url, className, click, after }) => {
  return (
    <Link
      to={url}
      onClick={click}
      className={className ? `${styles.link} ${className}` : styles.link}
      data-after={after}
    >
      {children}
    </Link>
  );
};
