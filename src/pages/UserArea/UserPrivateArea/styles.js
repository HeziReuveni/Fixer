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
  background-color: #0049b7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerTopNavbar = styled.div`
  height: 45vh;
  width: 100%;
  background-color: #0049b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: aliceblue;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  @media (min-width: 840px) {
    font-size: 2rem;
  }
`;

export const ContainerCenterContent = styled.div`
  width: 100%;
  height: 36vh;
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
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: thick double rgba(255, 255, 255, 0.3);
  padding: 0.1rem;
`;

export const LogOutIcon = styled.div`
  color: aliceblue;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 2rem;
`;
