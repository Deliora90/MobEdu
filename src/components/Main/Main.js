import { useState } from "react";
import Popup from "../Popup/Popup";
import { useInput } from "../../hooks/useInput";

import styles from "./Main.module.scss";

const Main = () => {
  const [arrayOfSum, setArrayOfSum] = useState([]);
  const [currentSum, setCurrentSum] = useState(0);
  const [popupActive, setPopupActive] = useState(false);
  const numFirst = useInput("");
  const numSecond = useInput("");

  const summation = (first, second) => {
    const sum = Number(first) + Number(second);
    return sum;
  }

  const getSum = (e) => {
    const sum = summation(numFirst.value, numSecond.value);
    setCurrentSum(sum);
    setPopupActive(true);
  }
  const closePopupHandle = () => {
    setPopupActive(false);
    setArrayOfSum((arr) => {
      const list = arr.concat(currentSum);
      return list;
    });
  }

  return (
    <>
      <main className={styles.container}>
        <div className={styles.result_container}>
          <h2 className={styles.result}>{arrayOfSum?.join(",")}</h2>
        </div>
        <div className={styles.input_container}>
          <input className={styles.input}
            value={numFirst.value}
            onChange={numFirst.onChange}
            aria-label="numFirst"
            type="number" />
          <input className={styles.input}
            value={numSecond.value}
            onChange={numSecond.onChange}
            aria-label="numSecond"
            type="number" />
        </div>
        <button className={styles.button}
          aria-label="getSumClick"
          type="button"
          onClick={getSum}>
          Выполнить
        </button>
      </main>
      <Popup active={popupActive} setActive={closePopupHandle}>
        <p>Результат суммирования: {currentSum}</p>
      </Popup>
    </>
  )
}

export default Main;
