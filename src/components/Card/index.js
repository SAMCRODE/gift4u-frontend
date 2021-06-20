import React, { useState } from "react";
import "./styles.scss";

import defaultImage from "../../assets/default-image.png";

const text = "Presentear";

const Card = ({ imagem, titulo, descricao, valor, chavePix }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
    /*
    setTimeout(() => {
      setShow(false)
    }, 20000);
    */
  };

  return (
    <div className="card">
      <div className="content">
        {<img src={defaultImage} alt="produto" />}

        <div className="text">
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </div>
        <div className="actions">
          <h2>
            <span>R${valor}</span>
          </h2>
          <button onClick={() => handleShow()}>
            <b>{text}</b>
          </button>
        </div>
      </div>
      {show && (
        <div className="pixDiv">
          <label>PIX:</label> <p id="pix">a4b64d9b-7jd8-8kf8-085j8sj4f56</p>
        </div>
      )}
    </div>
  );
};

export default Card;
