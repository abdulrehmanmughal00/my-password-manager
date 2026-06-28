"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [info, setInfo] = useState({ username: "", password: "" });
  const [display, setDisplay] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [array, setArray] = useState([]);
  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("details")) || [];
    setArray(saveData);
  }, []);

  let deleteHandle = (id) => {
    let filtered = array.filter((item, index) => index !== id);
    setArray(filtered);
    localStorage.setItem("details", JSON.stringify(filtered));
    toast.success("Deleted successfully");
  };

  let editHandler = (el, index) => {
    setInfo(el);
    setEditIndex(index);
    toast.info("Editing mode enabled");
  };

  let submitHandler = (e) => {
    e.preventDefault();

    if (info.password === "" || info.username === "") {
      toast.error("Please enter username and password");
      return;
    }

    let data;

    if (editIndex !== null) {
      data = [...array];
      data[editIndex] = info;
      setEditIndex(null);
      toast.success("Updated successfully");
    } else {
      data = [...array, info];
      toast.success("Saved successfully");
    }
    setArray(data);
    localStorage.setItem("details", JSON.stringify(data));
    setInfo({ username: "", password: "" });
  };

  return (
    <div className={styles.container}>
      <ToastContainer />

      <section className={styles.section1}>
        <div className={styles.name}>
          <div style={{ fontSize: "x-large" }}>
            <span style={{ color: "lightgreen" }}>&lt;</span>
            Pass
            <span style={{ color: "lightgreen" }}>OP/&gt;</span>
          </div>

          <p style={{ color: "darkgray" }}>
            there is nothing better than mano mughal
          </p>
        </div>

        <form onSubmit={submitHandler} className={styles.inputBox}>
          <div className={styles.div}>
            <input
              className={styles.username}
              type="text"
              placeholder="Enter username here"
              value={info.username}
              onChange={(e) => setInfo({ ...info, username: e.target.value })}
            />

            <div className={styles.passwordWrapper}>
              <input
                className={styles.password}
                type={display ? "password" : "text"}
                placeholder="Enter password"
                value={info.password}
                onChange={(e) => setInfo({ ...info, password: e.target.value })}
              />

              <lord-icon
                src="/wired-outline-69-eye-hover-look-around.json"
                trigger="loop"
                style={{ width: "24px", height: "24px" }}
                className={styles.eyeIcon}
                onClick={() => setDisplay(!display)}
              ></lord-icon>
            </div>
          </div>

          <div className={styles.buttonDiv}>
            <button className={styles.button} type="submit">
              Save
            </button>
          </div>
        </form>
      </section>

      <section className={styles.section2}>
        <div className={styles.wrapper}>
          <h3>Your Passwords</h3>

          <div className={styles.menu}>
            <div className={styles.span}>
              <h4>username</h4>
              <h4>password</h4>
              <h4>actions</h4>
            </div>

            {array.length === 0 ? (
              <p style={{ color: "black" }}>No item added</p>
            ) : (
              array.map((elem, idx) => (
                <div className={styles.main} key={idx}>
                  <h4>{elem.username}</h4>
                  <h4>{elem.password}</h4>

                  <div>
                    <lord-icon
                      src="/wired-outline-35-edit-in-dynamic.json"
                      trigger="loop"
                      style={{ width: "24px", height: "24px" }}
                      onClick={() => editHandler(elem, idx)}
                    ></lord-icon>

                    <lord-icon
                      src="/wired-outline-185-trash-bin-morph-trash-in.json"
                      trigger="hover"
                      style={{ width: "24px", height: "24px" }}
                      onClick={() => deleteHandle(idx)}
                    ></lord-icon>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
