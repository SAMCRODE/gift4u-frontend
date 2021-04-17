import React from "react";
import "./styles.scss";
import Button from "../Button";
import Logo from "../../assets/logo.svg";

const Header = () => (
  <div className="header">
    <a href="/">
      <img src={Logo} alt="product-img" />
    </a>
    <div className="buttons">
      <Button link="/Instructions" texto="Como funciona?" />
      <Button link="/Register" texto="Quero ganhar!" />
    </div>
  </div>
);

export default Header;
