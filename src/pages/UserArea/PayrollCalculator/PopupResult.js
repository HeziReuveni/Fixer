import React from "react";
import { ContainerPopupResult } from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import { Fade } from "react-reveal";
import { FiX } from "react-icons/fi";
import { FaSearchDollar } from "react-icons/fa";
import { RemoveScroll } from "react-remove-scroll";

const PopupResult = ({ setPopupResultMessage, thisIsResult }) => {
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  return (
    <RemoveScroll>
      <ContainerPopupResult
        style={{
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(0, 0, 0, 0.000001)",
        }}
      >
        <Fade bottom>
          <div
            style={{
              width: "100%",
              position: "absolute",
              bottom: "-100px",
            }}
          >
            <WaveBorder lowerColor="#0049B7" />

            <div
              style={{
                backgroundImage: url(true),
                backgroundColor: "#0049B7",
                height: "30vh",
                width: "100%",
              }}
            >
              <div
                style={{
                  textAlign: "right",
                  paddingRight: "1rem",
                  paddingTop: "1rem",
                }}
              >
                <FiX
                  onClick={() => setPopupResultMessage(false)}
                  color="whitesmoke"
                  size={20}
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <FaSearchDollar size={40} color="whitesmoke" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    color: "whitesmoke",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "right",
                    maxWidth: "90vw",
                    height: "80%",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
                  }}
                >
                  <div>
                    {" "}
                    שכר נטו לעובד :{" "}
                    {Math.floor(thisIsResult[0]).toLocaleString()}
                  </div>
                  <div>
                    עלות למעסיק &nbsp; :{" "}
                    {Math.floor(thisIsResult[1]).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </ContainerPopupResult>
    </RemoveScroll>
  );
};

export default PopupResult;
