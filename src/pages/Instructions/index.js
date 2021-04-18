import React from "react";
import "./styles.scss";
import Example from "../../assets/instructions-example.png";

const Instructions = () => (
  <div className="instruction-background">
    <div className="instruction-container">
      <div className="instruction-card">
        <h1>Como posso ganhar um presente?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
          laoreet nibh. Suspendisse ut consequat quam. Maecenas feugiat sit amet
          eros in cursus. Proin lacinia nisi nec tristique finibus. Nunc
          hendrerit felis vel felis euismod consectetur. Aliquam vel justo erat.
          Pellentesque egestas ex ut fermentum maximus. Suspendisse potenti.
          Curabitur vel consequat mi.
        </p>

        <ul>
          <li>Nome do produto</li>
          <li>Motivo</li>
          <li>Valor do produto</li>
          <li>Chave pix para receber o valor do produto</li>
          <li>Talvez QR code</li>
        </ul>
      </div>
      <div className="instruction-card">
        <div>
          <img src={Example} alt="Exemplo" />
        </div>
      </div>
    </div>
  </div>
);

export default Instructions;
