import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import { ContainerTitle, ButtonReturnHomePage } from "../EmployeeTable/styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import { useHistory } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

import {
  ContainerHelpText,
  Text,
  ButtonHelpPage,
  ContainerTextDetails,
} from "./styles";
import { useState } from "react";
import { getUserDetails } from "../../apis/privateArea";

const url = (wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/stars.svg${wrap ? ")" : ""}`;

const Help = () => {
  const [textDisplay, setTextDisplay] = useState(false);
  const [textDisplay2, setTextDisplay2] = useState(false);
  const [textDisplay3, setTextDisplay3] = useState(false);
  const [userDetails, setUserDetails] = useState();
  let history = useHistory();

  const findUser = async () => {
    const response = await getUserDetails();
    setUserDetails(response[0]);
  };

  useEffect(() => {
    findUser();
  }, []);

  const generateRandomNumber = () => {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomNumber = generateRandomNumber();

  const handleClick = () => {
    setTextDisplay3(true);
    setTextDisplay2(true);
    setTimeout(() => {
      history.push("/user-area");
    }, 3000);
  };

  console.log(userDetails);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100%",
      }}
    >
      <ButtonReturnHomePage onClick={() => history.push("/user-area")}>
        <ImHome />
      </ButtonReturnHomePage>
      <Fade top>
        <div>
          <ContainerTitle
            style={{
              backgroundImage: url(true),
            }}
          >
            ?אפשר לעזור
          </ContainerTitle>
          <WaveBorder upperColor="#0049B7" lowerColor="white" />
        </div>
      </Fade>
      <div
        style={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade top>
          <ContainerHelpText
            style={{
              backgroundImage: url(true),
            }}
          >
            {!textDisplay ? (
              <Text dir="rtl">
                היי, חשוב לנו יותר מכל לתת לכם את השירות הטוב ביותר. שלחו לנו
                פניה ונציג יחזור אליכם בהקדם.
              </Text>
            ) : (
              <Fade right>
                <ContainerTextDetails
                  style={{
                    display: textDisplay2 ? "none" : "flex",
                  }}
                >
                  <div> {userDetails && "מספר הפניה - " + randomNumber} </div>
                  <div>{userDetails && "מאת - " + userDetails.fullName}</div>
                  <div>{userDetails && userDetails.email + " - עבור"} </div>
                </ContainerTextDetails>
              </Fade>
            )}
            {textDisplay3 && (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Fade right>
                  <ContainerTextDetails>
                    <p
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      נשלח בהצלחה
                    </p>
                    <FaCheck color="#1aff81" size={40} />
                  </ContainerTextDetails>
                </Fade>
              </div>
            )}
            {textDisplay ? (
              <Fade right>
                <div
                  onClick={handleClick}
                  style={{
                    display: textDisplay2 ? "none" : "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "20vw",
                    color: "whitesmoke",
                    fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
                    fontSize: "1.3rem",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "1rem",
                  }}
                >
                  <IoIosSend size={25} />
                  <span>שלח</span>
                </div>
              </Fade>
            ) : (
              <ButtonHelpPage onClick={() => setTextDisplay(true)}>
                שלח פניה
              </ButtonHelpPage>
            )}
          </ContainerHelpText>
        </Fade>
      </div>
    </div>
  );
};

export default Help;
