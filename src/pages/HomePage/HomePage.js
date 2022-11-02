import React from "react";
import { ContainerHomePage } from "./styles";
import ParticlesBg from "particles-bg";
import WelcomeMessage from "./WelcomeMessage";
import SignUpAndLoginPage from "../SignUpAndLoginPage/SignUpAndLoginPage";

const HomePage = () => {
  return (
    <div className="home">
      <ParticlesBg type="fountain" num={30} bg={true} color="#87BCDE" />
      <ContainerHomePage>
        <WelcomeMessage />
      </ContainerHomePage>
      <SignUpAndLoginPage />
    </div>
  );
};

export default HomePage;
