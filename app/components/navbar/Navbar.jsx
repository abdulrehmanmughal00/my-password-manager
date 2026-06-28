import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span style={{ color: "green" }}>&lt;</span>
        Pass
        <span style={{ color: "green" }}>OP/&gt;</span>
      </div>
      <div className={styles.login}>
        {/* <button className={styles.loginBtn}>Login</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
