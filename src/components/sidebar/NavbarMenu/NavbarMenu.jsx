import React from "react";
import s from "./NavbarMenu.module.css";
import {NavLink} from "react-router-dom";

export const NavbarMenu = (props) => {

  return (
      <div className={s.navbar_menu}>
        {props.menu_items.map(e => {
          return <NavLink key={e.id} to={e.link} activeClassName={s.active}>{e.name}</NavLink>
        })}
      </div>
  );
};
