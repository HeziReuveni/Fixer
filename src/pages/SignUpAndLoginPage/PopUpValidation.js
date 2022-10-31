import React from "react";
import {
  ContainerPopUpValidation,
  FixIcon,
  FormToValidation,
  ContainerTextMessage,
  InputValidation,
  ButtonValidation,
} from "./styles";
import { FiX } from "react-icons/fi";
import { MdPhonelinkLock } from "react-icons/md";
import { Zoom, Fade } from "react-reveal";

const PopUpValidation = ({ setPopUp }) => {
  return (
    <div>
      <FixIcon>
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
            <FormToValidation>
              <ContainerTextMessage dir="rtl">
                שימו לב בדקות הקרובות ישלח לכם מסרון לנייד עם קוד בעל 4 ספרות
                לשם אימות, אנה הזינו אותו כאן כדי לסיים את תהליך ההרשמה. במידה
                ולא קיבלתם מסרון זה יש לוודא כי הוזן מספר פלאפון תקין, ולנסות
                בשנית.
              </ContainerTextMessage>

              <MdPhonelinkLock size={30} color="brown" />

              <InputValidation dir="rtl" placeholder="הזינו את הקוד" />

              <ButtonValidation>אישור</ButtonValidation>
            </FormToValidation>
          </div>
        </Zoom>
      </ContainerPopUpValidation>
    </div>
  );
};

export default PopUpValidation;
