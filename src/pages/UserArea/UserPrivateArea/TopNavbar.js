import React, { useContext } from "react";
import { ContainerTopNavbar, UserImage, LogOutIcon } from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import img from "./gifs/unuser.png";
import { FiLogOut } from "react-icons/fi";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/context";

const TopNavbar = ({ fullName, imgUrl }) => {
  const { setEmployees } = useContext(UserContext);
  let history = useHistory();
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("counter");
    setEmployees(null);
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
            {fullName ? <p dir="rtl">שלום {fullName}</p> : null}
            <div>
              <UserImage src={imgUrl ? imgUrl : img} />
            </div>
          </ContainerTopNavbar>
          <WaveBorder upperColor="#0049B7" lowerColor="white" />
        </div>
      </Fade>
    </div>
  );
};

export default TopNavbar;
