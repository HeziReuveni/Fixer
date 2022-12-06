import React from "react";
import { ContainerTopNavbar, UserImage, LogOutIcon } from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import img from "./gifs/unuser.png";
import { FiLogOut } from "react-icons/fi";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";


const TopNavbar = ({ fullName, imgUrl }) => {
  let history = useHistory();
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Fade top>
        <div>
          <LogOutIcon>
            <FiLogOut onClick={logOut} size={25} />
          </LogOutIcon>
          <ContainerTopNavbar
            style={{
              backgroundImage: url(true),
            }}
          >
            <p dir="rtl">ברוך הבא {fullName}</p>
            <div>
              <UserImage src={imgUrl ? imgUrl : img} />
            </div>
          </ContainerTopNavbar>
          <WaveBorder upperColor="#3225bf" lowerColor="white" />
        </div>
      </Fade>
    </div>
  );
};

export default TopNavbar;
