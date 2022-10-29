import styled from "styled-components";

export const ContainerConnectPage = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 25rem;
  border-radius: 30px;
  width: 85vw;
`;

export const ContainerTitleForm = styled.div`
  border: 2px solid aliceblue;
  border-radius: 30%;
  padding: 20px;
`;

export const TitleForm = styled.label`
  font-size: 2rem;
  letter-spacing: 1.5px;
  color: aliceblue;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  width: 100%;
  height: 5vh;
  min-height: 2rem;
  border: 2px solid aliceblue;
  border-radius: 10px;
  padding: 0.3rem;
  transition: 0.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const InputForm = styled.input`
  color: white;
  text-align: left;
  width: 90%;
  height: 80%;
  outline: none;
  border: none;
  background: none;
`;

export const ContainerBottomService = styled.div`
  min-height: 28vh;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerServiceComp = styled.div`
  color: aliceblue;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 30vh;
  width: 100%;
`;

export const ButtonLoginPage = styled.button`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.7rem;
  width: 40vw;
  color: aliceblue;
  font-size: 1.1rem;
  border: 2px solid aliceblue;
  border-radius: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
