import React from "react";
import git from "./gifs/CenterGifUserHomePage.gif";
import { Zoom } from "react-reveal";
import { ContainerCenterContent } from "./styles";

const CenterContent = () => {
  return (
    <ContainerCenterContent>
      <Zoom>
        <img src={git} width="200px" />
      </Zoom>
    </ContainerCenterContent>
  );
};

export default CenterContent;
