import styled from "styled-components";

export const ContainerHomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 130vh;
  width: 100%;
`;

export const ContainerWelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 25rem;
`;

export const ContainerTextMessage = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.3rem;
  height: 20rem;
  width: 100%;
  color: aliceblue;
  text-align: center;
`;

export const ButtonHomePage = styled.button`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  width: 40vw;
  color: aliceblue;
  font-size: 1.1rem;
  border: 1px solid aliceblue;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
