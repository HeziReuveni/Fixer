import React from "react";
import { FaInfo } from "react-icons/fa";
import { ContainerPopupResult, Box, TopBox, ButtonsBox } from "./styles";
import { Bounce } from "react-reveal";
import { RemoveScroll } from "react-remove-scroll";

const InfoMessage = ({ setInfoMessage }) => {
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  return (
    <div>
      <RemoveScroll>
        <ContainerPopupResult>
          <Bounce top>
            <Box
              style={{
                backgroundImage: url(true),
                height: "28vh",
                boxShadow: "none",
                marginBottom: "5rem",
              }}
            >
              <TopBox
                style={{
                  height: "8vh",
                }}
              >
                <FaInfo size={35} />
              </TopBox>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  minHeight: "100%",
                  backgroundImage: url(true),
                  backgroundColor: "#0049B7",
                }}
              >
                <div
                  dir="rtl"
                  style={{
                    textAlign: "center",
                    color: "whitesmoke",
                    fontSize: "1.2rem",
                    width: "80%",
                    fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
                  }}
                >
                  חשוב לציין! המידע המוצג הינו חישוב ממוצע בלבד, וכי מידע מדוייק
                  מכיל מספר רב של פרמטרים.
                </div>
                <ButtonsBox
                  style={{
                    fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
                    color: "#0049B7",
                    fontWeight: "bold",
                    backgroundColor: "whitesmoke",
                    width: "40%",
                    borderRadius: "0px",
                    boxShadow: "0px",
                    letterSpacing: "1px",
                  }}
                  onClick={() => setInfoMessage(false)}
                >
                  הבנתי
                </ButtonsBox>
              </div>
            </Box>
          </Bounce>
        </ContainerPopupResult>
      </RemoveScroll>
    </div>
  );
};

export default InfoMessage;
