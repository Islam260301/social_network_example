import React from "react";
import s from "./Navbar.module.css";
import {Friend} from "./Friend/Friend";
import {NavbarMenu} from "./NavbarMenu/NavbarMenu";

export const Navbar = (props) => {
  let friends = props.friends.map(e => <Friend name={e.name} image={e.image}/>)

  return (
    <nav className={s.nav}>
      <NavbarMenu menu={props.menu}/>
      <h3 className={s.friend_header}>Friends</h3>
      <div className={s.friends}>
        {friends}
      </div>
    </nav>
  );
};
