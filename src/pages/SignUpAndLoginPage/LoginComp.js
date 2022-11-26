import React from "react";
import {
  Form,
  TitleForm,
  ContainerTitleForm,
  ContainerInput,
  InputForm,
  ButtonLoginAndSignUpPage,
  ContainerIconAndLind,
  SideLine,
} from "./styles";
import { FaPhone } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { MdOutlinePassword } from "react-icons/md";
import { Fade } from "react-reveal";
import { FiX } from "react-icons/fi";

const LoginComp = ({ setLoginPage, setFirstView }) => {
  return (
    <div>
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
      <Fade top>
        <Form>
          <ContainerTitleForm>
            <RiUserFollowFill color="#87bcde" size={40} />
          </ContainerTitleForm>
          <TitleForm>התחברות</TitleForm>
          <ContainerInput>
            <InputForm
              style={{
                textAlign: "right",
              }}
              placeholder="מספר פלאפון"
              type="phone"
            />
            <ContainerIconAndLind>
              <SideLine />
              <FaPhone size={20} color="#87bcde" />
            </ContainerIconAndLind>
          </ContainerInput>
          <ContainerInput>
            <InputForm
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
      </Fade>
    </div>
  );
};

export default LoginComp;
