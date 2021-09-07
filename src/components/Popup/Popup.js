import React from "react";
import styles from "./Popup.module.scss";

const Popup = ({ active, setActive, children }) => {
  const onClose = () => {
    setActive(false);
  }
  return (
    <div className={`${styles.popup} ${active ? styles.popup_active : ""}`} onClick={onClose}>
      <div className={styles.container}>
        <span className={styles.close}></span>
        {children}
      </div>
    </div>
  )
}

export default Popup;
