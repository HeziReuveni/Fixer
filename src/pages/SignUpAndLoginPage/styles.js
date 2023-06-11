import styled from "styled-components";

export const ContainerConnectPage = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Form = styled.form`
  display: ${(props) =>
    props.popUpImagesUploading || props.popUp ? "none" : "flex"};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 21rem;
  border-radius: 30px;
  width: 85vw;
  margin-bottom: 2rem;
  @media (min-width: 840px) {
    width: 40vw;
  }
`;

export const ContainerTitleForm = styled.div`
  /* border: 2px solid aliceblue;
  border-radius: 30%;
  padding: 20px; */
`;

export const TitleForm = styled.label`
  font-size: 2rem;
  letter-spacing: 1.5px;
  color: #87bcde;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  width: 100%;
  height: 5vh;
  min-height: 3rem;
  border-bottom: 2px solid #87bcde;
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
  ::placeholder {
    color: antiquewhite;
    letter-spacing: 1px;
  }
`;

export const InputImageFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 0.5rem;
  letter-spacing: 1px;
  font-size: 0.9rem;
  color: antiquewhite;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const ContainerInputImageFile = styled(ContainerInput)`
  display: flex;
  align-items: center;
  justify-content: right;
  &:hover {
    background: none;
  }
`;

export const ContainerBottomService = styled.div`
  min-height: 28vh;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 840px) {
    width: 40vw;
  }
`;

export const ContainerServiceComp = styled.div`
  color: aliceblue;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 30vh;
  width: 100%;
`;

export const ButtonLoginAndSignUpPage = styled.button`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0x 0x 10px white;
  padding: 0.7rem;
  width: 40vw;
  color: #87bcde;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  cursor: pointer;
  @media (min-width: 840px) {
    width: 15vw;
  }
`;

export const SideLine = styled.span`
  border-left: 2px solid #87bcde;
  height: 2rem;
  border-radius: 20px;
`;

export const ContainerIconAndLind = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerPopUpValidation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  backdrop-filter: blur(10px);
  transition: 1s;
`;

export const FixIcon = styled.div`
  display: ${(props) => (props.resultValidation ? "none" : "flex")};
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 2;
`;

export const FormToValidation = styled.form`
  display: ${(props) => (props.resultValidation ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  min-height: 25rem;
  background: none;
`;

export const MessageSuccessfully = styled.div`
  display: ${(props) => (props.resultValidation ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 12rem;
  min-height: 12rem;
  /* background-color: rgba(255, 255, 255, 0.5); */
  border-radius: 50%;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  color: #14a34b;
  font-size: 1rem;
`;

export const ContainerTextMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  width: 90%;
  color: #87bcde;
  font-weight: bold;
`;

export const InputValidation = styled.input`
  text-align: center;
  border: 1px solid #87bcde;
  border-radius: 5px;
  color: #87bcde;
  padding: 18px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  outline: none;
  background: none;
  ::placeholder {
    color: #87bcde;
    text-align: center;
    letter-spacing: 1px;
  }
`;

export const ButtonValidation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid #87bcde;
  color: #87bcde;
  width: 40%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

export const ContainerContentPopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ParaError = styled.p`
  color: #e41c3d;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
`;

export const ErrorMessageToLogin = styled.div`
  position: absolute;
  z-index: 3;
  right: 10vw;
  top: 40px;
  height: 10vh;
  width: 80vw;
  color: #e41c3d;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
`;
