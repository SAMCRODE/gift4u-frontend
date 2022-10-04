import React from "react";
import { Container, Content, Text, Actions, Image } from "./styles";
import defaultImage from '../../assets/default-image.png'
interface CardProps {
  image: string;
  title: string;
  description: string;
  pixCode: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ image, title, description, value, pixCode }) => (
  <Container>
    <Content>
      <Image>
        <img src={defaultImage} alt="produto" />
      </Image>
      <Text>
        <h3>{title}</h3>
        <p>{description}</p>
      </Text>
      <Actions>
        <h2>R${value}</h2>
        <button>
          <b>Presentear</b>
        </button>
      </Actions>
    </Content>
  </Container>
);

export default Card;
