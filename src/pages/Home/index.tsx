import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
// import api from "../../services/api";
import { GiftItem } from "../../models/Gift";
import { Page, Container } from "./styles";

const Home = () => {
  const [gifts, setGifts] = useState<GiftItem[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetch(
          `https://gift4uall.herokuapp.com/gift/collection/${page}`
        )
          .then((response) => response.json())
          .then((response) => ({ data: response }));

        setGifts([...gifts, ...data.gifts]);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <Page>
      <Container>
        <ul>
          {gifts.map((gift) => (
            <li key={gift.ID}>
              <Card
                title={gift.Name}
                image={gift.ProductImage}
                description={gift.Description}
                value={gift.Value}
                pixCode={gift.PixCode}
              />
            </li>
          ))}
        </ul>
        <p>Loading...</p>
      </Container>
    </Page>
  );
};

export default Home;
