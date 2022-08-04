import { MainLayout } from "../../essential-app/src/layouts/MainLayout";

import { Carousel } from "react-responsive-carousel";
import { SembradoCard } from "./SembradoCard";
import { FormadoCard } from "./FormadoCard";
import { ColaborandoCard } from "./ColaborandoCard";
import { EjecutandoCard } from "./EjecutandoCard";
import { FC, useEffect, useState } from "react";
import useQuery from '../../hooks/useQuery';
import { useNavigate } from "react-router-dom";

interface Props {
    selected: number
}

export const EquipoStates: FC<Props> = ({ selected }) => {
   const navigate = useNavigate()
    const [itemSelected, setItemSelected] = useState<number>(selected)
    useEffect(() => {
        navigate('/alfas/gestion/equipo/estados?selected='+ itemSelected.toString())
    }, [itemSelected])
 

  return (
    <MainLayout title="estados">
      <div style={{margin: "auto"}}>
        <Carousel
          showArrows={false}
          emulateTouch
          infiniteLoop
          width={"98%"}
          selectedItem={itemSelected}
          showThumbs={false}
          onChange={(index) => setItemSelected(index)}
          showStatus={false}
        >
          <div>
            <SembradoCard />
          </div>

          <div>
            <FormadoCard />
          </div>
          <div>
            <ColaborandoCard />
          </div>
          <div>
            <EjecutandoCard />
          </div>
        </Carousel>
      </div>
    </MainLayout>
  );
};
