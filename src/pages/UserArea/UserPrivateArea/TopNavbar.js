import React, { useContext } from "react";
import { ContainerTopNavbar, UserImage, LogOutIcon } from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import img from "./gifs/sefy.jpg";
import { FiLogOut } from "react-icons/fi";
import { Fade } from "react-reveal";
import { UserContext } from "../../context/context";

const TopNavbar = () => {
  const { name, imgUrl } = useContext(UserContext);
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  console.log(name, imgUrl);

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
            ברוך הבא {name}
            <div>
              <UserImage src={imgUrl ? imgUrl : img} />
            </div>
          </ContainerTopNavbar>
          <WaveBorder upperColor="#1b108d" lowerColor="white" />
        </div>
      </Fade>
    </div>
  );
};

export default TopNavbar;
