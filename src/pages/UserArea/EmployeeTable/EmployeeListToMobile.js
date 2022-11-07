import React from "react";
import {
  ContainerTitle,
  ContainerUl,
  ContainerLi,
  Image,
  ContainerTextRow,
  ContainerIconRow,
} from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import { Fade, Zoom } from "react-reveal";
import { TiInfoLarge } from "react-icons/ti";
import img from "../../UserArea/UserPrivateArea/gifs/sefy.jpg";

const EmployeeListToMobile = () => {
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  return (
    <div>
      <Fade top>
        <div>
          <ContainerTitle
            style={{
              backgroundImage: url(true),
            }}
          >
            טבלת עובדים
          </ContainerTitle>
          <WaveBorder upperColor="#3225bf" lowerColor="white" />
        </div>
      </Fade>
      <div>
        <Zoom>
          <ContainerUl>
            <ContainerLi>
              <ContainerIconRow>
                <TiInfoLarge size={25} />
              </ContainerIconRow>
              <ContainerTextRow>
                <div
                  style={{
                    fontSize: "1.3rem",
                  }}
                >
                  יחזקאל ראובני
                </div>
                <div>מנהל אזור </div>
              </ContainerTextRow>
              <Image src={img} />
            </ContainerLi>
            <ContainerLi>sdasdasdasdas</ContainerLi>
            <ContainerLi>sdasdasdasdas</ContainerLi>
            <ContainerLi>sdasdasdasdas</ContainerLi>
            <ContainerLi>sdasdasdasdas</ContainerLi>
            <ContainerLi>sdasdasdasdas</ContainerLi>
            <ContainerLi>sdasdasdasdas</ContainerLi>
            <ContainerLi>sdasdasdasdas</ContainerLi>
            <ContainerLi>sdasdasdasdas</ContainerLi>
          </ContainerUl>
        </Zoom>
      </div>
    </div>
  );
};

export default EmployeeListToMobile;
