import ButtonSucess from "../../components/Button/Success";
import { createGift } from "../../api/api";
import React, { useState } from "react";
import { PageRegister, FormCard, ButtonUpload } from "./styles";
import { GiftItem } from "../../models/Gift";

const Register = () => {
  const [product, setProduct] = useState<GiftItem[] | any>();

  const submitForm = async (event: any) => {
    event.preventDefault();
    console.log("passei");
    try {
      await createGift(product);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageRegister>
      <FormCard>
        <h1>Cadastre o seu presente</h1>
        <form onSubmit={submitForm}>
          <div>
            <label>Nome do produto</label>
            <input
              type="text"
              onChange={(e) => setProduct({ ...product, Name: e.target.value })}
            />
            <label>Descrição</label>
            <textarea
              onChange={(e) =>
                setProduct({ ...product, Description: e.target.value })
              }
            />
            <label> Valor</label>
            <input
              id="valor"
              type="text"
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
        </form>
      </FormCard>
    </PageRegister>
  );
};

export default Register;
