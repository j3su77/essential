import { CardAlpha } from "./CardAlpha";
import { MainLayout } from "../layouts/MainLayout";

import styles from "./CardTransition.module.css";
import { FC } from "react";

interface Props {
  type: string;
  percent: number;
}

export const items = [
  ["sembrado", 100],
  ["formado", 100],
  ["colaborando", 100],
["ejecutando", 43],
]

export const EquipoTransicion: FC<Props> = ({ type, percent }) => {
  return (
    <MainLayout title="title">
      <div
        style={{ width: "100%", height: "70px", backgroundColor: "red" }}
      ></div>
      <CardAlpha title={"equipo"} type={"gestion"}>
        <div className={styles.transitioncard__container}>
          <p className={styles.transitioncard__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            voluptate neque necessitatibus provident omnis nemo temporibus earum
            at. Delectus quod saepe totam esse.
          </p>
     

          {items.map(item => (
            <div key={item[0]} className={`${styles.percent}  ${type + "__text-dark"}`}>
            <h5 className={styles.name}> {item[0]} </h5>
            <span
              className={`${styles.progress}  ${type + "__light"}`}
              style={{ width: item[1] + "%" }}
            ></span>
          </div>
          ))}

        </div>
      </CardAlpha>
    </MainLayout>
  );

};
