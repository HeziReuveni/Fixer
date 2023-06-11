import styled from "styled-components";

export const ButtonImagesUpload = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  padding: 1rem;
  border-radius: 5px;
  background: none;
  border: none;
  color: aliceblue;
  font-size: 1.4rem;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.05);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
  @media (min-width: 840px) {
    width: 15vw;
  }
`;

export const ContainerDisplayUploadImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
`;
