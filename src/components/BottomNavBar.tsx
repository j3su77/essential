import {  FC } from "react";


import { RiUser5Fill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import { RiNumber6 } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { FaUser, FaUsers } from "react-icons/fa";

import styles from "./BottomNavBar.module.css";
import { OldSchoolMenuLink } from './OldSchoolMenuLink';



export const BottomNavBar= () => {


  return (
    <div className={styles.bottom__nav}>
      <OldSchoolMenuLink to="/" end={true} icon={<HiHome />} />
      <OldSchoolMenuLink to="/alfas"  end={false} icon={<RiNumber6 />}/>
      <OldSchoolMenuLink to="/equipo" end={false} icon={<FaUsers />}/>
      <OldSchoolMenuLink to="/cuenta" end={false} icon={<FaUser />} />
    </div>
  );
};
