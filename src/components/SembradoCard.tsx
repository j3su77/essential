

import styles from "./StateCard.module.css"
import { CardAlpha } from '../../essential-app/src/components/CardAlpha';
import useQuery from '../../hooks/useQuery';
import { items } from './EquipoTransicion';


export const critierios = [
"se definio la mision", "Se definieron y conocen restricciones",
"Se establecieron mecanismos de crecimiento", "Se definio la composicion",
"Se bosquejaron responsabilidades", "Se declaro nivel de compromiso requerido",
"Se identificaron competencias requeridas", "Se determino el tamaño",
"Se definieron reglas de gobierno", "Se selecciono modelo de liderazgo"
  ]
  


export const SembradoCard = () => {
    const query = useQuery();
    const selected = Number(query.get("selected"))
  return (
  <CardAlpha title={"equipo"} type={"gestion"}>
    <div className={styles.statecard__container}>
      <h2 className={styles.statecard__title} style={{border: "3px solid #4C6FC6"}}>
        Sembrado
      </h2>
 
      {critierios.map(criterio => (
        <div key={criterio} className={`${styles.criterio}`}>
        <input type="checkbox" className={`${styles.check} gestion__dark`} style={{accentColor: "#4C6FC6"}} />
        <h3
          className={`${styles.text__criterio} `}
          style={{ }}
        >{criterio}</h3>
      </div>
      ))}

      <div className={styles.number} style={{border: "3px solid #4C6FC6", backgroundColor: "#C6D9F1" }}>
        {selected + 1} / {items.length}
      </div>

    </div>
  </CardAlpha>
  )
}
