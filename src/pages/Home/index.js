import { useEffect, useState, useRef } from "react";
import api from "../../services/api";
import Card from "../../components/Card";
import "./styles.scss";

const Home = () => {
  const [gifts, setGifts] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setPage((old) => old + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

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
  }, [page]);

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
              />
            </li>
          ))}
        </ul>
        <p ref={loaderRef}>Finish</p>
      </div>
    </div>
  );
};

export default Home;
