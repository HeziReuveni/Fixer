import React from "react";
import { ContainerTopNavbar, UserImage, LogOutIcon } from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import img from "./gifs/sefy.jpg";
import { FiLogOut } from "react-icons/fi";
import { Fade } from "react-reveal";

const TopNavbar = () => {
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Fade top>
        <div>
          <LogOutIcon>
            <FiLogOut />
          </LogOutIcon>
          <ContainerTopNavbar
            style={{
              backgroundImage: url(true),
            }}
          >
            ברוך הבא ראובני
            <div>
              <UserImage src={img} />
            </div>
          </ContainerTopNavbar>
          <WaveBorder upperColor="#1b108d" lowerColor="white" />
        </div>
      </Fade>
    </div>
  );
};

export default TopNavbar;
