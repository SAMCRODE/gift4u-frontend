import styled from "styled-components";

export const PageRegister = styled.div`
  padding: 100px 0;

  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
`;

export const FormCard = styled.div`
  width: 480px;
  background: #ffffff;
  border: 1px solid #49b6ff;

  box-sizing: border-box;

  box-shadow: 6px 8px 4px rgb(73 182 255 / 30%);
  border-radius: 5px;
  padding: 30px;

  margin-bottom: 50px;

  h1 {
    font-size: 24px;
    line-height: 28px;

    color: #a480cf;

    margin-bottom: 25px;
  }

  form {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      font-size: 16px;
      /* line-height: 14px; */

      color: #a480cf;

      width: 100%;

      label {
        font-weight: 600;
      }

      input {
        margin-bottom: 15px;
        height: 30px;

        padding: 5px;

        border: 1px solid #E0E0E0;
        border-radius: 5px;
        outline: none;

      }

      textarea {
        width: 100%;
        height: 80px;

        resize: none;

        padding: 5px;
        margin-bottom: 15px;

        border: 1px solid #E0E0E0;
        border-radius: 5px;
        outline: none;
      }
      img {
        border: 1px solid #E0E0E0;
        width: 220px;
        height: 220px;
      }
    }
    /* div:nth-child(2) {
      padding-left: 100px;
      display: flex;
      flex-direction: column;

      justify-content: space-between;
      align-items: flex-start;
    } */
  }
`;

export const ButtonUpload = styled.div`
  width: 180px;
  height: 46px;

  background-color: #49b6ff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  border-radius: 8px;
  color: #fff;

  font-weight: 600;
  cursor: pointer;

  input {
    width: 180px;
    height: 46px;
    cursor: pointer;
    opacity: 0;
    position: absolute;
    z-index: 999;
  }
`;
