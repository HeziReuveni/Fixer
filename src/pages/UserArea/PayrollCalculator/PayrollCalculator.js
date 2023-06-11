import React, { useState, useEffect } from "react";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import { Fade } from "react-reveal";
import { ButtonReturnHomePage, ContainerTitle } from "../EmployeeTable/styles";
import { ButtonImagesUpload } from "../../multipurpose/styles";
import {
  ContainerCalculateBoxes,
  Box,
  TopBox,
  InputBox,
  ButtonsBox,
} from "./styles";
import { ImHome } from "react-icons/im";
import { RiNumbersFill } from "react-icons/ri";
import { IoArrowRedoSharp } from "react-icons/io5";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import PopupResult from "./PopupResult";
import InfoMessage from "./InfoMessage";
import { calculateResult } from "./utils/calculate";

const Papers = () => {
  let history = useHistory();
  const [selectYes, setSelectYes] = useState(null);
  const [selectNo, setSelectNo] = useState(null);
  const [selectCarYes, setSelectCarYes] = useState(null);
  const [selectCarNo, setSelectCarNo] = useState(null);
  const [salary, setSalary] = useState(null);
  const [priceCar, setPriceCar] = useState(null);
  const [withKeren, setWithKeren] = useState(null);
  const [withCar, setWithCar] = useState(null);
  const [infoMessage, setInfoMessage] = useState(null);
  const [popupResultMessage, setPopupResultMessage] = useState(false);
  const [thisIsResult, setThisIsResult] = useState([]);

  useEffect(() => {
    setInfoMessage(true);
    // let counter = localStorage.getItem("counter");
    // if (!counter) {
    //   setInfoMessage(true);
    //   localStorage.setItem("counter", 1);
    // } else if (+counter == 5) {
    //   setInfoMessage(true);
    //   localStorage.setItem("counter", 1);
    // } else {
    //   localStorage.setItem("counter", +counter + 1);
    //   setInfoMessage(false);
    // }
  }, []);

  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;
  const handleFocus = (event) => {
    event.stopPropagation();
  };

  const handleSalarySubmit = (e) => {
    e.preventDefault();
    if (salary !== null && withKeren !== null && withCar !== null) {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
      const response = calculateResult(salary, withKeren, withCar, priceCar);
      setPopupResultMessage(true);
      setThisIsResult(response);
    }
    return console.log(false);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "110vh",
        width: "100vw",
      }}
    >
      {infoMessage && <InfoMessage setInfoMessage={setInfoMessage} />}
      {popupResultMessage && (
        <PopupResult
          setPopupResultMessage={setPopupResultMessage}
          thisIsResult={thisIsResult}
        />
      )}
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
            מחשבון שכר
          </ContainerTitle>
          <WaveBorder upperColor="#0049B7" lowerColor="white" />
        </div>
      </Fade>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContainerCalculateBoxes onSubmit={handleSalarySubmit}>
          <Fade right>
            <Box
              style={{
                backgroundImage: url(true),
              }}
            >
              <TopBox>גובה השכר</TopBox>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "15vh",
                }}
              >
                <InputBox
                  placeholder="הזן את גובה השכר"
                  onChange={(e) => setSalary(e.target.value)}
                  onFocus={handleFocus}
                  type="number"
                />
              </div>
            </Box>
          </Fade>
          <Fade delay={100} right>
            <Box
              style={{
                backgroundImage: url(true),
              }}
            >
              <TopBox>קרן השתלמות</TopBox>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "15vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <ButtonsBox
                    onClick={() => {
                      setSelectNo(true);
                      setSelectYes(false);
                      setWithKeren(false);
                    }}
                  >
                    {!selectNo ? (
                      "לא"
                    ) : (
                      <Fade>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <BsFillPatchCheckFill
                            size={30}
                            color="rgb(4, 230, 98)"
                          />
                        </div>
                      </Fade>
                    )}
                  </ButtonsBox>
                  <ButtonsBox
                    onClick={() => {
                      setSelectYes(true);
                      setSelectNo(false);
                      setWithKeren(true);
                    }}
                  >
                    {!selectYes ? (
                      "כן"
                    ) : (
                      <Fade>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <BsFillPatchCheckFill
                            size={30}
                            color="rgb(4, 230, 98)"
                          />
                        </div>
                      </Fade>
                    )}
                  </ButtonsBox>
                </div>
              </div>
            </Box>
          </Fade>
          <Fade delay={200} right>
            <Box
              style={{
                backgroundImage: url(true),
              }}
            >
              <TopBox>החזקת רכב</TopBox>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "15vh",
                }}
              >
                {selectCarYes && (
                  <Fade bottom>
                    <div
                      onClick={() => setSelectCarYes(false)}
                      style={{
                        position: "absolute",
                        right: "0px",
                        top: "0px",
                        height: "6vh",
                        width: "15vw",
                        backgroundColor: "red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundImage: url(true),
                        backgroundColor: "#0049B7",
                      }}
                    >
                      <IoArrowRedoSharp color="whitesmoke" size={20} />
                    </div>
                  </Fade>
                )}
                {selectCarYes ? (
                  <InputBox
                    onChange={(e) => setPriceCar(e.target.value)}
                    placeholder="הזן את מחיר הרכב"
                    onFocus={handleFocus}
                    type="number"
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <ButtonsBox
                      onClick={() => {
                        setSelectCarNo(true);
                        setSelectCarYes(false);
                        setWithCar(false);
                      }}
                    >
                      {!selectCarNo ? (
                        "לא"
                      ) : (
                        <Fade>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <BsFillPatchCheckFill
                              size={30}
                              color="rgb(4, 230, 98)"
                            />
                          </div>
                        </Fade>
                      )}
                    </ButtonsBox>
                    <ButtonsBox
                      onClick={() => {
                        setSelectCarYes(true);
                        setSelectCarNo(false);
                        setWithCar(true);
                      }}
                    >
                      {!selectCarYes ? (
                        "כן"
                      ) : (
                        <Fade>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <BsFillPatchCheckFill
                              size={30}
                              color="rgb(4, 230, 98)"
                            />
                          </div>
                        </Fade>
                      )}
                    </ButtonsBox>
                  </div>
                )}
              </div>
            </Box>
          </Fade>
          <Fade delay={300} right>
            <ButtonImagesUpload
              style={{
                backgroundColor: "#0049B7",
                boxShadow: "0px 0px 10px rgb(194, 194, 194)",
                borderRadius: "0px",
                color: "white",
                fontWeight: "bold",
                width: "40vw",
              }}
            >
              <RiNumbersFill />
              חשב
            </ButtonImagesUpload>
          </Fade>
        </ContainerCalculateBoxes>
      </div>
    </div>
  );
};

export default Papers;
