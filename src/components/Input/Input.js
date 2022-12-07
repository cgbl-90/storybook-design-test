import React from "react";
import "./Input.css";

function Input(props) {
  const { variant = "small", ...rest } = props;

  return <input className={`npt ${variant}`} {...rest} />;
}

export default Input;
