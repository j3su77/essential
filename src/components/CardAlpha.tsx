import { FC, ReactNode } from "react";
import { MainLayout } from '../layouts/MainLayout';

import styles from "./CardAlpha.module.css"


interface Props {
    title: string;
    type: string;
    children: ReactNode
}

export const CardAlpha: FC<Props> = ({title, type, children}) => {
  return (
        <div  className={`${type}__text-dark  ${styles.card}`}>
        <h2 className={`${styles.title} ${type}__light`} >{title}</h2>
        {children}

        <div className={styles.card__footer}>
          <div  className={styles["card__footer-item"]}>
            nucleo
          </div>
          <div  className={styles["card__footer-item"]}>
            version
          </div>
        </div>
        </div>
        
  )
}
