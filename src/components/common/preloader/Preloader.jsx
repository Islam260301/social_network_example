import loadImage from "../../../assets/img/loadImage.gif";
import React from "react";

export const Preloader = (props) => {
  return (
    <img className={props.class} src={loadImage} alt="loading"/>
  )
}