import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(to left, rgb(73, 182, 255), rgb(220, 181, 239));
  box-shadow: 2px 0px 2px black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-left: 10%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-right: 10%;
`;
