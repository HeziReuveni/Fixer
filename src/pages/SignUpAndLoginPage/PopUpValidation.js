import React, { useState } from "react";
import {
  ContainerPopUpValidation,
  FixIcon,
  FormToValidation,
  ContainerTextMessage,
  InputValidation,
  ButtonValidation,
  MessageSuccessfully,
  ContainerContentPopUp,
  ParaError,
} from "./styles";
import { FiX } from "react-icons/fi";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdPhonelinkLock } from "react-icons/md";
import { TiWarning } from "react-icons/ti";
import { Zoom, Fade } from "react-reveal";
import { checkOptCode } from "../apis/auth";
import { useHistory } from "react-router-dom";
import { signUp } from "../apis/auth";

const PopUpValidation = ({
  setPopUp,
  fullName,
  phoneNumber,
  password,
  email,
  idNumber,
  imgUrl,
}) => {
  const [optCode, setOptCode] = useState();
  const [resultValidation, setResultValidation] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();

  const handleSendOptCode = async (e) => {
    e.preventDefault();
    const result = await checkOptCode(optCode);
    if (result) {
      await signUp(fullName, phoneNumber, password, email, idNumber, imgUrl);
      setTimeout(() => {
        history.push("/user-area");
      }, 2000);
    }
    setResultValidation(result);
    setErrorMessage(!result);
  };

  return (
    <div>
      <FixIcon resultValidation={resultValidation}>
        <Zoom>
          <FiX size={20} color="#87bcde" onClick={() => setPopUp(false)} />
        </Zoom>
      </FixIcon>
      <ContainerPopUpValidation>
        <Zoom top>
          <ContainerContentPopUp>
            <MessageSuccessfully resultValidation={resultValidation}>
              <Zoom>
                <BsPatchCheckFill
                  style={{
                    marginTop: "0.5rem",
                  }}
                  size={100}
                />
              </Zoom>
            </MessageSuccessfully>
            <FormToValidation
              resultValidation={resultValidation}
              onSubmit={handleSendOptCode}
            >
              <ContainerTextMessage dir="rtl">
                שימו לב ברגעים אלה נשלח לכם הודעה לאימייל עם קוד בעל 6 ספרות לשם
                אימות, אנה הזינו אותו כאן כדי לסיים את תהליך ההרשמה. במידה ולא
                קיבלתם הודעה זה יש לוודא כי הוזן אימייל תקין, ולנסות בשנית.
              </ContainerTextMessage>
              {!errorMessage && (
                <MdPhonelinkLock size={30} color="rgb(0, 179, 0)" />
              )}
              {errorMessage && (
                <Fade>
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <ParaError>הוזן קוד שגוי</ParaError>
                    <TiWarning size={30} color="#d62d49" />
                  </div>
                </Fade>
              )}
              <InputValidation
                onChange={(e) => setOptCode(e.target.value)}
                dir="rtl"
                placeholder="הזינו כאן את הקוד"
                maxLength={6}
              />
              <ButtonValidation type="submit">אישור</ButtonValidation>
            </FormToValidation>
          </ContainerContentPopUp>
        </Zoom>
      </ContainerPopUpValidation>
    </div>
  );
};

export default PopUpValidation;
