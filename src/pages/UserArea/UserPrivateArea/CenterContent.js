import React from "react";
import git from "./gifs/CenterGifUserHomePage.gif";
import { Zoom } from "react-reveal";

const CenterContent = () => {
  return (
    <div>
      <Zoom>
        <img src={git} width="200px" />
      </Zoom>
    </div>
  );
};

export default CenterContent;
