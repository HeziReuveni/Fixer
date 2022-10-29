import React, { useState, useContext } from "react";
import { UserContext } from "../context/context";
import {
  ContainerWelcomeMessage,
  ContainerTextMessage,
  ButtonHomePage,
} from "./styles";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";
import { GiStarMedal } from "react-icons/gi";

const WelcomeMessage = () => {
  const { setLoginPage, setSignupPage, setFirstView } = useContext(UserContext);

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

        <GiStarMedal />

        <Fade right>
          <Link
            smooth={true}
            offset={300}
            duration={700}
            to="SignUpAndLoginPage"
          >
            <ButtonHomePage
              onClick={() => {
                setLoginPage(true);
                setSignupPage(false);
                setFirstView(false);
              }}
            >
              התחברות
            </ButtonHomePage>
          </Link>
        </Fade>
        <Fade left>
          <br></br>
          <Link smooth={true} duration={700} to="SignUpAndLoginPage">
            <ButtonHomePage
              onClick={() => {
                setSignupPage(true);
                setLoginPage(false);
                setFirstView(false);
              }}
            >
              הרשמה
            </ButtonHomePage>
          </Link>
        </Fade>
      </ContainerWelcomeMessage>
    </>
  );
};

export default WelcomeMessage;
