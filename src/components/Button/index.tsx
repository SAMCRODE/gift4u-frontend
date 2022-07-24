import React from "react";
import { ActionButton } from "./styles";

interface ButtonProps {
  texto: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ texto, link }) => (
  <ActionButton>
    <a href={link}>{texto}</a>
  </ActionButton>
);

export default Button;
