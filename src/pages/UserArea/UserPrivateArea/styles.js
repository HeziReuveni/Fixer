import styled from "styled-components";

export const ContainerUserHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 100vh;
  width: 100%;
`;

export const ContainerBottomNavbar = styled.div`
  height: 15vh;
  width: 100%;
  background-color: #3225bf;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerTopNavbar = styled.div`
  height: 25vh;
  width: 100%;
  background-color: #3225bf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: aliceblue;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
`;

export const ContainerCenterContent = styled.div`
  width: 100%;
  height: 51vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerIconBottomNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.4rem;
  border-radius: 5px;
  color: whitesmoke;
`;

export const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: thick double aliceblue;
  padding: 0.3rem;
`;

export const LogOutIcon = styled.div`
  color: aliceblue;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 2rem;
`;
