import React, { useEffect, useContext } from "react";
import img from "../UserPrivateArea/gifs/unuser.png";
import {
  ContainerTitle,
  ContainerUl,
  ContainerLi,
  Image,
  ContainerTextRow,
  ContainerIconRow,
  ButtonReturnHomePage,
} from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import { Fade, Zoom } from "react-reveal";
import { TiInfoLarge } from "react-icons/ti";
import { ImHome } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/context";
import { getEmployees } from "../../apis/table";
import gif from "./gifs/loading.gif";

const EmployeeListToMobile = () => {
  const { employees, setEmployees } = useContext(UserContext);
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;
  let history = useHistory();

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await getEmployees();
      setEmployees(response);
    };
    fetchEmployees();
  }, [employees]);

  return (
    <div>
      <ButtonReturnHomePage>
        <ImHome onClick={() => history.push("/user-area")} />
      </ButtonReturnHomePage>
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
            {employees &&
              employees.map((item, key) => (
                <ContainerLi key={key}>
                  <ContainerIconRow>
                    <TiInfoLarge size={25} />
                  </ContainerIconRow>
                  <ContainerTextRow>
                    <div
                      style={{
                        fontSize: "1.3rem",
                      }}
                    >
                      {item.fullName}
                    </div>
                    <div>{item.role}</div>
                  </ContainerTextRow>
                  <Image src={item.imageUrl ? item.imageUrl : img} />
                </ContainerLi>
              ))}
          </ContainerUl>
        </Zoom>
        {employees === null && (
          <img
            width="200"
            src={gif}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeListToMobile;
