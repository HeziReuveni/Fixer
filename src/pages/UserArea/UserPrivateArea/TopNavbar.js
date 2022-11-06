import React, { useContext } from "react";
import { ContainerTopNavbar, UserImage, LogOutIcon } from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import img from "./gifs/unuser.png";
import { FiLogOut } from "react-icons/fi";
import { Fade } from "react-reveal";
import { UserContext } from "../../context/context";
import { useHistory } from "react-router-dom";

const TopNavbar = () => {
  const { name, imgUrl } = useContext(UserContext);
  let history = useHistory();
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
          <LogOutIcon onClick={() => history.push("/")}>
            <FiLogOut />
          </LogOutIcon>
          <ContainerTopNavbar
            style={{
              backgroundImage: url(true),
            }}
          >
            <p dir="rtl">ברוך הבא {name}</p>
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
