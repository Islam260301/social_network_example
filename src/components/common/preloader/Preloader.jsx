import loadImage from "../../../assets/img/loadImage.gif";
import React from "react";

export const Preloader = (props) => {
  return (
    <img className={props.class ? props.class : "static_preloader"} src={loadImage} alt="loading"/>
  )
}