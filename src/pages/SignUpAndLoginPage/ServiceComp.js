import React from "react";
import { ContainerServiceComp } from "./styles";
import arrowGif from "./gifs/arrow-down.gif";
import { Link } from "react-scroll";

const ServiceComp = () => {
  return (
    <ContainerServiceComp>
      אנה בחר את סוג השירות
      <Link smooth={true} duration={700} to="home">
        <img
          style={{
            transform: "rotate(3.142rad)",
          }}
          alt="arrowImg"
          width="110px"
          src={arrowGif}
        />
      </Link>
    </ContainerServiceComp>
  );
};

export default ServiceComp;
