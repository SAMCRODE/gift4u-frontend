import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../../components/Card";
import "./styles.scss";

const Home = () => {
  const [gifts, setGifts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get(`gift/collection/${page}`);
        setGifts([...gifts, ...data.gifts]);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="page">
      <div className="container">
        <ul>
          {gifts.map((gift) => (
            <li key={gift.ID}>
              <Card
                titulo={gift.Name}
                descricao={gift.Description}
                valor={gift.Value}
                valorPix={gift.PixCode}
              />
            </li>
          ))}
        </ul>
        <p>nothing...</p>
      </div>
    </div>
  );
};

export default Home;
