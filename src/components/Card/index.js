import React from "react";
import "./styles.scss";

const Card = ({ imagem, titulo, descricao, valor }) => (
  <div className="card">
    <div className="content">
      <div className="image">
        <img src={imagem} alt="produto" />
      </div>
      <div className="text">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
      <div className="actions">
        <h2>R${valor}</h2>
        <button>
          <b>Presentear</b>
        </button>
      </div>
    </div>
  </div>
);

export default Card;
