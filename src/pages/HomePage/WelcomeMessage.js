import React, { useContext } from "react";
import { UserContext } from "../context/context";
import {
  ContainerWelcomeMessage,
  ContainerTextMessage,
  ButtonHomePage,
} from "./styles";
import { Fade } from "react-reveal";

const WelcomeMessage = () => {
  const { setLoginPage, setSignupPage, setFirstView } = useContext(UserContext);

  const registerOnClick = () => {
    setSignupPage(true);
    setLoginPage(false);
    setFirstView(false);
  };

  const loginOnClick = () => {
    setLoginPage(true);
    setSignupPage(false);
    setFirstView(false);
  };

  return (
    <>
      <ContainerWelcomeMessage>
        <Fade top>
          <ContainerTextMessage dir="rtl">
            שלום וברוכים הבאים ל Fixer. פלטפורמה זו נותנת לכם את כל הכלים כדי
            לנהל את העסק שלכם על הצד הטוב ביותר, תוך מתן שירותים מתקדים שיהפכו
            את ניהול העסק שלכם למהיר, יעיל ונוח. הירשמו והתחילו לנהל הכל
            בדיגיטל.
          </ContainerTextMessage>
        </Fade>
        <Fade right>
          <ButtonHomePage
            style={{
              backgroundColor: "rgba(49, 88, 171, 0.175)",
            }}
            onClick={loginOnClick}
          >
            התחברות
          </ButtonHomePage>
        </Fade>
        <Fade left>
          <ButtonHomePage
            style={{
              background: "none",
              border: "1px solid whitesmoke",
            }}
            onClick={registerOnClick}
          >
            הרשמה
          </ButtonHomePage>
        </Fade>
      </ContainerWelcomeMessage>
    </>
  );
};

export default WelcomeMessage;
