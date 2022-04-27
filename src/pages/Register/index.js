import ButtonSucess from "../../components/Button/Sucess";
import api from "../../services/api";
import React, { useState } from "react";
import "./styles.scss";
import ImageDefault from "../../assets/default-image.png";

import { UploadApiEndpoint } from "../../config";
import axios from "axios";

const Register = () => {
  const [product, setProduct] = useState("");
  const [image, setImage] = useState();

  const formData = new FormData();
  if (image) {
    formData.append("img", image, image.name);
  }
  const submitForm = async (event) => {
    event.preventDefault();

    try {
      await api.post("gift/create", product);
      console.log(image);
      await axios.post(UploadApiEndpoint, formData);
    } catch (error) {
      console.error(error);
    }
  };

  const loadFile = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);

    const imagem = event.target.files[0];
    setImage(imagem);
  };

  return (
    <div className="page-register">
      <div className="form-card">
        <h1>Cadastre o seu presente</h1>
        <form>
          <div>
            <label>Nome do produto</label>
            <input
              type="text"
              onChange={(e) => setProduct({ ...product, Name: e.target.value })}
            />
            <label>Descrição</label>
            <textarea
              type="text"
              onChange={(e) =>
                setProduct({ ...product, Description: e.target.value })
              }
            />
            <label> Valor</label>
            <input
              id="valor"
              type="number"
              onChange={(e) =>
                setProduct({ ...product, Value: parseFloat(e.target.value) })
              }
            />
            <label>Chave PIX</label>
            <input
              type="text"
              onChange={(e) =>
                setProduct({ ...product, PixCode: e.target.value })
              }
            />

            <ButtonSucess
              texto="Cadastrar e tentar a sorte =)"
              click={submitForm}
            />
          </div>
          <div>
            <label>Imagem do produto</label>
            <img alt="Imagem padrão" src={ImageDefault} id="output" />

            {
              <div className="button-upload">
                Escolher imagem
                <input
                  type="file"
                  className="upload"
                  onChange={(event) => loadFile(event)}
                />
              </div>
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
