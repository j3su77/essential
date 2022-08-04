import { Route, Routes, Link } from "react-router-dom";

import { BarAlpha } from "../components/BarAlpha";
import { MainLayout } from "../layouts/MainLayout";

const Alfas = () => {
  return (
    <MainLayout title="Alfas">
      <Link
        style={{ textDecoration: "none" }}
        to={"personalizacion/interesados"}
      >
        <BarAlpha type={"personalizacion"} name={"interesados"} percent={40} />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to={"personalizacion/oportunidad"}
      >
        <BarAlpha type={"personalizacion"} name={"Oportunidad"} percent={20} />
      </Link>

      <Link style={{ textDecoration: "none" }} to={"solucion/requisitos"}>
        <BarAlpha type={"solucion"} name={"requisitos"} percent={40} />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to={"solucion/sistema-de-software"}
      >
        <BarAlpha type={"solucion"} name={"sistema de software"} percent={30} />
      </Link>

      <Link style={{ textDecoration: "none" }} to={"gestion/trabajo"}>
        <BarAlpha type={"gestion"} name={"trabajo"} percent={55} />
      </Link>

      <Link style={{ textDecoration: "none" }} to={"gestion/equipo"}>
        <BarAlpha type={"gestion"} name={"equipo"} percent={68} />
      </Link>

      <Link style={{ textDecoration: "none" }} to={"gestion/forma-de-trabajo"}>
        <BarAlpha type={"gestion"} name={"forma de trabajo"} percent={10} />
      </Link>
    </MainLayout>
  );
};

export default Alfas;
