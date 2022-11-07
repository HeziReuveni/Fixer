import styled from "styled-components";

export const ContainerTablePage = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: white;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  background-color: #3225bf;
  width: 100%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2rem;
  color: whitesmoke;
  letter-spacing: 2px;
`;

export const ContainerUl = styled.div`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerLi = styled.li`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #3225bf;
  color: whitesmoke;
  margin-top: 1rem;
  height: 15vh;
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;
`;

export const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  border: thick double rgba(255, 255, 255, 0.3);
  padding: 0.1rem;
`;

export const ContainerTextRow = styled.div`
  text-align: right;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export const ContainerIconRow = styled.div`
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 1rem;
`;

export const ButtonAddUser = styled.button`
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50px;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
`;

export const ContainerAddForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
`;
