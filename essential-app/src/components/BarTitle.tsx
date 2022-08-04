import { FC } from "react";


import styles from "./BarTitle.module.css"


interface Props {
    name: string;
    value: string;
}

export const BarTitle: FC<Props> = ({name, value}) => {
  return (
    <div className={styles.bartitle__container}>
        <h2 className={styles.bartitle__name}>{name}: </h2>{"  "}
        <h3 className={styles.bartitle__value}>{value}</h3>
    </div>
  )
}
