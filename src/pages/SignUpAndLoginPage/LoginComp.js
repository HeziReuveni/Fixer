import React, { useState } from "react";
import {
  Form,
  TitleForm,
  ContainerTitleForm,
  ContainerInput,
  InputForm,
  ButtonLoginAndSignUpPage,
  ContainerIconAndLind,
  SideLine,
  ErrorMessageToLogin,
} from "./styles";
import { RiUserFollowFill } from "react-icons/ri";
import { MdOutlinePassword } from "react-icons/md";
import { Fade, Zoom } from "react-reveal";
import { FiX } from "react-icons/fi";
import { login } from "../apis/auth";
import { SiGmail } from "react-icons/si";
import { BsPatchCheckFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import HeadShake from "react-reveal/HeadShake";

const LoginComp = ({ setLoginPage, setFirstView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(true);
  let history = useHistory();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    setResult(response);
    setError(response);
    setTimeout(() => {
      setError(true);
    }, 3000);
    if (response) {
      setTimeout(() => {
        history.push("/user-area");
      }, 2000);
    }
  };

  return (
    <div>
      {!error && (
        <ErrorMessageToLogin>
          <HeadShake>הוזנו פרטים לא תקינים</HeadShake>
        </ErrorMessageToLogin>
      )}
      {!result && (
        <Fade>
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              zIndex: "3",
              color: "#87bcde",
            }}
          >
            <FiX
              size={20}
              onClick={() => {
                setLoginPage(false);
                setFirstView(true);
              }}
            />
          </div>
        </Fade>
      )}
      <Fade top>
        {!result ? (
          <Form onSubmit={handleLoginSubmit}>
            <ContainerTitleForm>
              <RiUserFollowFill color="#87bcde" size={40} />
            </ContainerTitleForm>
            <TitleForm>התחברות</TitleForm>
            <ContainerInput>
              <InputForm
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  textAlign: "right",
                }}
                placeholder="הזן אימייל"
                type="phone"
              />
              <ContainerIconAndLind>
                <SideLine />
                <SiGmail size={20} color="#87bcde" />
              </ContainerIconAndLind>
            </ContainerInput>
            <ContainerInput>
              <InputForm
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  textAlign: "right",
                }}
                placeholder="סיסמה"
                dir="rtl"
                type="password"
              />
              <ContainerIconAndLind>
                <SideLine />
                <MdOutlinePassword size={25} color="#87bcde" />
              </ContainerIconAndLind>
            </ContainerInput>
            <div>
              <ButtonLoginAndSignUpPage>התחבר</ButtonLoginAndSignUpPage>
            </div>
          </Form>
        ) : (
          <Zoom>
            <BsPatchCheckFill
              style={{
                color: "#14a34b",
              }}
              size={100}
            />
          </Zoom>
        )}
      </Fade>
    </div>
  );
};

export default LoginComp;
