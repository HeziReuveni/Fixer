import React, { useContext } from "react";
import { UserContext } from "../context/context";
import {
  ContainerWelcomeMessage,
  ContainerTextMessage,
  ButtonHomePage,
} from "./styles";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

const WelcomeMessage = () => {
  const { setLoginPage, setSignupPage, setFirstView } = useContext(UserContext);
  const registerOnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setSignupPage(true);
    setLoginPage(false);
    setFirstView(false);
  };

  const loginOnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

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
          <Link
            smooth={true}
            offset={300}
            duration={700}
            to="SignUpAndLoginPage"
          >
            <ButtonHomePage onClick={loginOnClick}>התחברות</ButtonHomePage>
          </Link>
        </Fade>
        <Fade left>
          <Link
            smooth={true}
            offset={100}
            duration={700}
            to="SignUpAndLoginPage"
          >
            <ButtonHomePage onClick={registerOnClick}>הרשמה</ButtonHomePage>
          </Link>
        </Fade>
      </ContainerWelcomeMessage>
    </>
  );
};

export default WelcomeMessage;
