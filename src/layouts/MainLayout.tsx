import { FC, ReactNode } from "react";
import { BarTitle } from "../components/BarTitle";

interface Props {
  title: string;
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ title,children }) => {
  return (

    <div>
      <BarTitle name={"Equipo"} value={"alpha#1234"} />
      <BarTitle name={"Esfuerzo"} value={"App Institucional ITSA"} />
        {children}

    </div>
  );
};
