import React from "react";
import "./styles.scss";

const Button = ({ texto, link, icon }) => (
  <div className="button">
    <a href={link}>{texto}</a>
  </div>
);

export default Button;
