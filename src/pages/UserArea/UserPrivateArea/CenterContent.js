import React from "react";
import git from "./gifs/CenterGifUserHomePage.gif";
import { Zoom } from "react-reveal";

const CenterContent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "51vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Zoom>
        <img src={git} width="200px" />
      </Zoom>
    </div>
  );
};

export default CenterContent;
