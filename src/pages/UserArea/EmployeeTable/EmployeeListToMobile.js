import React, { useEffect, useState } from "react";
import Axios from "axios";
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
import img from "../../UserArea/UserPrivateArea/gifs/sefy.jpg";
import { useHistory } from "react-router-dom";
import { getEmployees } from "../../apis/auth";

const EmployeeListToMobile = () => {
  const [employees, setEmployees] = useState([]);
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
  }, []);

  console.log(employees);

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
              employees.map((item) => (
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
                      {item.fullName}
                    </div>
                    <div>{item.role}</div>
                  </ContainerTextRow>
                  <Image src={item.imageUrl && item.imageUrl} />
                </ContainerLi>
              ))}
          </ContainerUl>
        </Zoom>
      </div>
    </div>
  );
};

export default EmployeeListToMobile;
