import styled from "styled-components";

export const Page = styled.div`
  background: url("../../assets/back.jpg") no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

export const Container = styled.div`
  padding: 100px auto;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 10px 20px;

    li {
      margin: 10px;
    }
  }
`;
