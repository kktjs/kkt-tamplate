import React from "react";
import "./styles.css";
import styles from "./index.module.less";

export default function App() {
  return (
    <div className="App">
      <h1>Hello KKT</h1>
      <h2>Start editing to see some magic happen!</h2>
      <a className={styles.github} href="https://github.com/kktjs/kkt">
        Github kkt
      </a>
    </div>
  );
}
