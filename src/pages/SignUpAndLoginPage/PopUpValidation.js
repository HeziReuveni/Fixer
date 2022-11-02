import React, { useState } from "react";
import {
  ContainerPopUpValidation,
  FixIcon,
  FormToValidation,
  ContainerTextMessage,
  InputValidation,
  ButtonValidation,
  MessageSuccessfully,
} from "./styles";
import { FiX } from "react-icons/fi";
import { MdPhonelinkLock } from "react-icons/md";
import { Zoom } from "react-reveal";
import { checkOptCode } from "../apis/auth";
import { signUp } from "../apis/auth";
import { useHistory } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";

const PopUpValidation = ({
  setPopUp,
  fullName,
  phoneNumber,
  password,
  email,
  idNumber,
  imageUrl,
}) => {
  const [optCode, setOptCode] = useState();
  const [resultValidation, setResultValidation] = useState(false);
  const history = useHistory();

  const handleSendOptCode = async (e) => {
    e.preventDefault();
    const result = await checkOptCode(optCode);
    if (result) {
      signUp(fullName, phoneNumber, password, email, idNumber, imageUrl);
      setTimeout(() => {
        history.push("/user-area");
      }, 2000);
    }
    setResultValidation(result);
    console.log(result);
  };

  return (
    <div>
      <RemoveScroll>
        <FixIcon resultValidation={resultValidation}>
          <Zoom>
            <FiX size={20} color="aliceblue" onClick={() => setPopUp(false)} />
          </Zoom>
        </FixIcon>
        <ContainerPopUpValidation>
          <Zoom top>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MessageSuccessfully resultValidation={resultValidation}>
                התחברת בהצלחה
              </MessageSuccessfully>
              <FormToValidation
                resultValidation={resultValidation}
                onSubmit={handleSendOptCode}
              >
                <ContainerTextMessage dir="rtl">
                  שימו לב ברגעים הקרובים ישלח לכם מסרון לנייד עם קוד בעל 4 ספרות
                  לשם אימות, אנה הזינו אותו כאן כדי לסיים את תהליך ההרשמה. במידה
                  ולא קיבלתם מסרון זה יש לוודא כי הוזן מספר פלאפון תקין, ולנסות
                  בשנית.
                </ContainerTextMessage>

                <MdPhonelinkLock size={30} color="brown" />

                <InputValidation
                  onChange={(e) => setOptCode(e.target.value)}
                  dir="rtl"
                  placeholder="הזינו את הקוד"
                />

                <ButtonValidation type="submit">אישור</ButtonValidation>
              </FormToValidation>
            </div>
          </Zoom>
        </ContainerPopUpValidation>
      </RemoveScroll>
    </div>
  );
};

export default PopUpValidation;
