import styled from "styled-components";

export const ContainerHelpText = styled.div`
  width: 90vw;
  height: 40vh;
  background-color: #0049b7;
  box-shadow: 0px 0px 10px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 840px) {
    width: 30vw;
  }
`;

export const Text = styled.div`
  color: whitesmoke;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.2rem;
  text-align: center;
  padding: 20px;
`;

export const ButtonHelpPage = styled.button`
  color: white;
  border: none;
  font-size: 1.2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

export const ContainerTextDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: whitesmoke;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.2rem;
  width: 100%;
`;

export const ButtonSubmitHelp = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 20vw;
  color: whitesmoke;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.3rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 840px) {
    width: 10vw;
  }
`;
