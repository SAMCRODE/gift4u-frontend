import React from "react";
import "./styles.scss";
import "./component-helper.scss";
import Button from "../Button";
import Logo from "../../assets/logo.svg";
import { slide as Menu } from "react-burger-menu";

const Header = () => (
  <div>
    <div className="header">
      <a href="/">
        <img src={Logo} alt="product-img" />
      </a>
      <div className="buttons">
        <Button link="/Instructions" texto="Como funciona?" />
        <Button link="/Register" texto="Quero ganhar!" />
      </div>
    </div>
    <div className="toggle">
      <Menu>
        <a id="home" className="menu-item" href="/Instructions">
          Como funciona?
        </a>
        <a id="about" className="menu-item" href="/Register">
          Quero ganhar!
        </a>
      </Menu>
    </div>
  </div>
);

export default Header;
