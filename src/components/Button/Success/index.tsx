import React from "react";
import { Success } from "./styles";

interface ButtonProps {
  texto: string;
  click: () => void;
}

const ButtonSuccess: React.FC<ButtonProps> = ({ texto, click }) => (
  <Success>
    <button onClick={click}>{texto}</button>
  </Success>
);

export default ButtonSuccess;
