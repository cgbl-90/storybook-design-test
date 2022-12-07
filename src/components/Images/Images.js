import React from "react";
import "./Images.css";

function Images(props) {
  const { variant = "bg_img", children, ...rest } = props;

  return <img alt={children} className={`${variant}`} {...rest} />;
}

export default Images;
