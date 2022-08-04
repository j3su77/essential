import { FC } from "react";

import styles from "./BarAlpha.module.css";

interface Props {
  type: string;
  name: string;
  percent: number;
}

export const BarAlpha: FC<Props> = ({ type, name, percent }) => {
  return (
    <div className={`${styles.baralpha__container} ${type+"__card"}`}>
      <h2 className={styles.baralpha__title}>{name}</h2>
      <div className={styles.baralpha__percent}>
        <h5 className={styles.baralpha__number}> {percent} % </h5>
        <span className={`${styles.baralpha__progress} ${type + "__dark"}`} style={{ width: percent+"%" }}>
        </span>
      </div>
    </div>
  );
};
