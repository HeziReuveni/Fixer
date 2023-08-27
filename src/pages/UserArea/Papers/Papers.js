import React, { useState, useEffect, useRef } from "react";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import { Fade } from "react-reveal";
import { ButtonReturnHomePage, ContainerTitle } from "../EmployeeTable/styles";
import { ImHome } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { getUserDetails } from "../../apis/privateArea";
import SignatureModal from "./SignatureModal";
import { FaFileSignature } from "react-icons/fa";

import {
  ContainerBusinessDetails,
  ContainerSecondDetails,
  ContainerThirdDetails,
  GeneralDetails,
  EndDetails,
  ContainerDateAndSignature,
  InputDetails,
} from "./styles";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Papers = () => {
  const [userDetails, setUserDetails] = useState(0);
  const [price, setPrice] = useState(0);
  const [number, setNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signatureDataURL, setSignatureDataURL] = useState("");
  const [readyToPrint, setReadyToPrint] = useState(false);

  const invoiceRef = useRef();

  const downloadFile = () => {
    setReadyToPrint(true);

    html2canvas(invoiceRef.current).then((canvas) => {
      //Returns the image data URL, parameter: image format and clarity (0-1)
      var pageData = canvas.toDataURL("image/jpeg", 0.5);

      //Default vertical direction, size ponits, format a4[595.28,841.89]
      var pdf = new jsPDF("", "pt", "a4");

      //Two parameters after addImage control the size of the added image, where the page height is compressed according to the width-height ratio column of a4 paper.
      pdf.addImage(
        pageData,
        "JPEG",
        45,
        0,
        500,
        600
        //595.28,
        //(592.28 / canvas.width) * canvas.height
      );

      pdf.save("Fixer.pdf");
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveSignature = (dataURL) => {
    setSignatureDataURL(dataURL);
  };
  let history = useHistory();
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  const findDetails = async () => {
    const response = await getUserDetails();
    setUserDetails(response[0]);
  };

  const generateRandomNumber = () => {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    findDetails();
    setNumber(generateRandomNumber());
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,

        width: "100%",
      }}
    >
      <SignatureModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveSignature}
      />

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
            הנפק חשבונית
          </ContainerTitle>
          <WaveBorder upperColor="#0049B7" lowerColor="white" />
        </div>
      </Fade>
      <div ref={invoiceRef}>
        <ContainerBusinessDetails>
          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              color: "rgba(80,80,80)",
            }}
          >
            {userDetails && userDetails.fullName}
          </div>
          <div>טלפון : {userDetails && userDetails.phoneNumber}</div>
          <div>{userDetails && userDetails.email} : דוא"ל</div>
        </ContainerBusinessDetails>
        <ContainerSecondDetails
          style={{
            fontSize: "1.1rem",
          }}
        >
          <div>חשבונית מס' : {number}</div>
          <div>מס עוסק : {userDetails.idNumber}</div>
        </ContainerSecondDetails>
        <ContainerThirdDetails>
          <div>
            <span
              style={{
                marginRight: "0.3rem",
              }}
            >
              <InputDetails dir="rtl" placeholder="הזן את שם הנמען" />
            </span>{" "}
            לכבוד
          </div>
          <div>
            <span>
              <InputDetails dir="rtl" placeholder="הזן את כתובת הנמען" />
            </span>{" "}
            כתובת
          </div>
        </ContainerThirdDetails>
        <GeneralDetails>
          <div
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            פרטים
          </div>
          <textarea
            dir="rtl"
            style={{
              paddingRight: "0.5rem",
              marginTop: "0.5rem",
              width: "90%",
              height: "15vh",
              borderRadius: "5px",
              border: "2px solid gray",
              fontSize: "1.1rem",
              fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
            }}
          ></textarea>
        </GeneralDetails>
        <EndDetails>
          {" "}
          <div>
            <span>
              <InputDetails
                onChange={(e) => setPrice(e.target.value)}
                placeholder="הזן את הסכום "
                type="number"
                dir="rtl"
              />
            </span>{" "}
            סה"כ
          </div>
          <div>
            <span>17%</span> מע"מ
          </div>
          <div>
            <span>
              <InputDetails
                dir="rtl"
                value={Math.floor(price * 1.17).toLocaleString()}
              />
            </span>{" "}
            סה"כ כולל מע"מ
          </div>
        </EndDetails>
        <ContainerDateAndSignature>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "1.2rem",
              }}
            >
              חתימה
            </div>
            <span>
              {signatureDataURL ? (
                <div
                  style={{
                    padding: "0px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img width={120} src={signatureDataURL} alt="Signature" />
                </div>
              ) : (
                <button
                  style={{
                    border: "none",
                    background: "none",
                  }}
                  onClick={handleOpenModal}
                >
                  <FaFileSignature
                    style={{
                      cursor: "pointer",
                    }}
                    size={35}
                    color="#015adf"
                  />
                </button>
              )}
            </span>
          </div>

          <div
            style={{
              fontSize: "1.2rem",
            }}
          >
            <span>
              <InputDetails placeholder="הזן תאריך הנפקה  " type="date" />
            </span>{" "}
            תאריך
          </div>
        </ContainerDateAndSignature>
      </div>
      <ContainerDateAndSignature
        style={{
          backgroundColor: "white",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "#015adf",
            color: "whitesmoke",
            padding: "1rem",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => downloadFile()}
        >
          PDF הורד כקובץ
        </button>
      </ContainerDateAndSignature>
    </div>
  );
};

export default Papers;
