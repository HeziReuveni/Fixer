import React from "react";
import { ContainerHomePage } from "./styles";
import ParticlesBg from "particles-bg";
import WelcomeMessage from "./WelcomeMessage";
import SignUpAndLoginPage from "../SignUpAndLoginPage/SignUpAndLoginPage";

const HomePage = () => {
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;
  return (
    <div className="home">
      <ParticlesBg type="cobweb" num={30} bg={true} color="#87BCDE" />
      <ContainerHomePage>
        <WelcomeMessage />
      </ContainerHomePage>
      <SignUpAndLoginPage />
    </div>
  );
};

export default HomePage;
