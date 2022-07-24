import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #49b6ff;

  box-sizing: border-box;
  box-shadow: 6px 8px 4px rgba(73, 182, 255, 0.3);
  border-radius: 5px;

  width: 333px;
  height: 380px;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  flex-direction: column;

  img {
    max-width: 130px;
    max-height: 130px;

    margin: 0px 5px;
  }
`;

export const Text = styled.div`
  width: 100%;
  justify-content: flex-start;

  flex-direction: column;
  height: 35%;
  display: flex;
  padding: 0px 40px;

  h3 {
    padding-bottom: 10px;
  }

  p {
    font-size: 13px;
    line-height: 15px;

    color: #6f6767;
  }
`;

export const Actions = styled.div`
  height: 25%;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  h2 {
    width: 100%;
    padding: 10px 40px;
    text-align: left;
  }
  button {
    border: 0;
    cursor: pointer;
    font-size: 15px;

    margin: 0 auto;
    width: 100%;
    height: 40px;

    background: #ff499e;
    border-radius: 0px 0px 5px 5px;

    color: white;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 40%;
`;