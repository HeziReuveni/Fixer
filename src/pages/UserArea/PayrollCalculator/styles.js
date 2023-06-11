import styled from "styled-components";

export const ContainerCalculateBoxes = styled.form`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 840px) {
    height: 75vh;
  }
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: whitesmoke;
  height: 6vh;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #0049b7;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Box = styled.div`
  width: 80vw;
  height: 20vh;
  background-color: #0049b7;
  box-shadow: 0px 0px 10px rgb(194, 194, 194);
  @media (min-width: 840px) {
    width: 25vw;
  }
`;

export const InputBox = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  height: 6vh;
  width: 80%;
  outline: none;
  border: none;
  color: white;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: wheat;
    font-size: 1.1rem;
  }
  @media (min-width: 840px) {
    width: 20vw;
  }
`;

export const ButtonsBox = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
  font-size: 1.4rem;
  border: none;
  letter-spacing: 2px;
  width: 20vw;
  height: 6vh;
  @media (min-width: 840px) {
    width: 10vw;
  }
`;

export const ContainerPopupResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  left: 0px;
  right: 0px;
  height: 100vh;
  width: 100vw;
  background-color: rgba(80, 80, 80, 0.3);
  backdrop-filter: blur(20px);
`;
