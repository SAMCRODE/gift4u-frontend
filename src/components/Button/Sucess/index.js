import React from "react";
import "./styles.scss";

const ButtonSucess = ({ texto, click }) => (
  <div className="button-sucess">
    <button onClick={click}>{texto}</button>
  </div>
);

export default ButtonSucess;
