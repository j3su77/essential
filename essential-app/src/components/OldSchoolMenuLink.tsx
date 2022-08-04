import { FC, ReactNode } from "react";
import { IconBaseProps, IconType } from "react-icons";
import {useMatch, Link } from "react-router-dom";


import styles from "./OldSchoolMenuLink.module.css";

interface Props {
  to: string;
  end: boolean;
  icon: ReactNode
}



export const OldSchoolMenuLink: FC<Props> = ({  to, end, icon }) => {
    let match = useMatch({
      path: to,
      end: end,
    });
  
    return (
      <div className={`${styles.bn__tab}`}>
        <Link to={to} className={match ? styles["bn__tab-active"] : ""}>
            {icon}
        </Link>
      </div>
    );
  };
  