import React from "react";
import {
  InstructionBackground,
  InstructionContainer,
  InstructionCard,
} from "./styles";
// import Example from "../../assets/instructions-example.png";

const Instructions = () => (
  <InstructionBackground>
    <InstructionContainer>
      <InstructionCard>
        <h1>Como posso ganhar um presente?</h1>
        <p>
          Para cadastrar um item que deseja receber de presente do destino é necessário registrar algumas informações do produto no site. Assim, algum usuário aleatoriamente rico pode te presentear e fazer o seu dia mais feliz ou não. É totalmente possível que seu presente permaneça no nosso banco de dados pelo resto da eternindade sem ser notado e pago.

          Todavia, recomendamos cadastrar pois nunca se sabe o que uma pessoa entediada e com muito dinheiro pode fazer, para isso precisa informar:
        </p>

        <ul>
          <li>Nome do produto</li>
          <li>Motivo</li>
          <li>Valor do produto</li>
          <li>Chave pix para receber o valor do produto</li>
        </ul>
      </InstructionCard>
      <div className="instruction-card">
        <div>
          {/* <img src={Example} alt="Exemplo" /> */}
        </div>
      </div>
    </InstructionContainer>
  </InstructionBackground>
);

export default Instructions;
