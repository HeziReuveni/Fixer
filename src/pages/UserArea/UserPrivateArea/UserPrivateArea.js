import React from "react";
import TopNavbar from "./TopNavbar";
import CenterContent from "./CenterContent";
import BottomNavbar from "./BottomNavbar";
import { ContainerUserHomePage } from "./styles";

const UserPrivateArea = () => {
  return (
    <ContainerUserHomePage>
      <TopNavbar />
      <CenterContent />
      <BottomNavbar />
    </ContainerUserHomePage>
  );
};

export default UserPrivateArea;
