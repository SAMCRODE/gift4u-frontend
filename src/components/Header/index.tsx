import React from "react";
import { HeaderContainer, Buttons } from "./styles";
import Button from "../Button";
import Logo from "../../assets/logo.svg";

const Header = () => (
  <div>
    <HeaderContainer>
      <a href="/">
        <img src={Logo} alt="product-img" />
      </a>
      <Buttons>
        <Button link="/Instructions" texto="Como funciona?" />
        <Button link="/Register" texto="Quero ganhar!" />
      </Buttons>
    </HeaderContainer>
  </div>
);

export default Header;
