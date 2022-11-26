import React, { useContext } from "react";
import { ContainerConnectPage, ContainerBottomService } from "./styles";
import { UserContext } from "../context/context";
import serviceGif from "./gifs/89111-service.gif";
import loginGif from "./gifs/121421-login.gif";
import singUpGif from "./gifs/117764-sign-up.gif";
import WaveBorder from "./WaveBorder";
import ServiceComp from "./ServiceComp";
import LoginComp from "./LoginComp";
import SignUpComp from "./SignUpComp";
import { RemoveScroll } from "react-remove-scroll";

const SignUpAndLoginPage = () => {
  const { loginPage, signupPage, firstView } = useContext(UserContext);

  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  return (
    <div
      style={{
        minHeight: "100vh",
        marginBottom: "-25px",
        background: "#253237",
        backgroundImage: url(true),
      }}
    >
      <ContainerConnectPage>
        {firstView && <ServiceComp />}
        {loginPage && (
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              height: "45rem",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(20px)",
              boxShadow: "0x 0x 10px white",
            }}
          >
            <LoginComp />
          </div>
        )}
        {signupPage && (
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              height: "45rem",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(20px)",
            }}
          >
            <SignUpComp />
          </div>
        )}
      </ContainerConnectPage>
      <WaveBorder upperColor="#253237" lowerColor="white" />
      <ContainerBottomService>
        {firstView && <img alt="firstGif" width="165px" src={serviceGif} />}
        {loginPage && <img alt="loginGif" width="165px" src={loginGif} />}
        {signupPage && <img alt="signUpGif" width="165px" src={singUpGif} />}
      </ContainerBottomService>
    </div>
  );
};

export default SignUpAndLoginPage;
