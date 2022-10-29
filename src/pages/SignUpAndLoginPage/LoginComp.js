import React from "react";
import {
  LoginForm,
  TitleForm,
  ContainerTitleForm,
  ContainerInput,
  InputForm,
  ButtonLoginPage,
} from "./styles";
import { FaUser, FaPhone } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Fade } from "react-reveal";

const LoginComp = () => {
  return (
    <div>
      <Fade top>
        <LoginForm>
          <ContainerTitleForm>
            <FaUser color="aliceblue" size={30} />
          </ContainerTitleForm>
          <TitleForm>התחברות</TitleForm>
          <ContainerInput>
            <InputForm dir="rtl" type="phone" />
            <FaPhone size={20} color="aliceblue" />
          </ContainerInput>
          <ContainerInput>
            <InputForm dir="rtl" type="password" />
            <MdOutlinePassword size={25} color="aliceblue" />
          </ContainerInput>
          <div>
            <ButtonLoginPage>התחבר</ButtonLoginPage>
          </div>
        </LoginForm>
      </Fade>
    </div>
  );
};

export default LoginComp;
