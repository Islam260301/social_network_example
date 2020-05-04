import React from "react";
import s from "./Navbar.module.css";
import {Friend} from "./friend/Friend";
import {NavbarMenu} from "./NavbarMenu/NavbarMenu";

export const Navbar = (props) => {

  return (
    <nav className={s.nav}>
      <NavbarMenu menu={props.data.menu}/>
      <h3 className={s.friend_header}>Friends</h3>
      <div className={s.friends}>
        {props.data.friends.map(e => {
          return <Friend name={e.name} image={e.image}/>
        })}
      </div>
    </nav>
  );
};
