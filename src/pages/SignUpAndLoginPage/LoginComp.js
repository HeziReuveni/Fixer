import React from "react";
import {
  LoginForm,
  TitleForm,
  ContainerTitleForm,
  ContainerInput,
  InputForm,
  ButtonLoginPage,
  ContainerIconAndLind,
  SideLine,
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
            <ContainerIconAndLind>
              <SideLine />
              <FaPhone size={20} color="aliceblue" />
            </ContainerIconAndLind>
          </ContainerInput>
          <ContainerInput>
            <InputForm dir="rtl" type="password" />
            <ContainerIconAndLind>
              <SideLine />
              <MdOutlinePassword size={25} color="aliceblue" />
            </ContainerIconAndLind>
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
