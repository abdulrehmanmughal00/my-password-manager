import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.end}>
        <div style={{ fontSize: "large" }}>
          <span style={{ color: "green" }}>&lt;</span>
          Pass
          <span style={{ color: "green" }}>OP/&gt;</span>
        </div>
        <p>  © 2026 Password Manager. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
