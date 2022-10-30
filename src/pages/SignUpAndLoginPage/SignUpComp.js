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
  InputImageFile,
  ContainerInputImageFile,
} from "./styles";
import { FaUserPlus, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsImageFill } from "react-icons/bs";
import { FaRegIdCard } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Fade } from "react-reveal";

const SignUpComp = () => {
  return (
    <div>
      <Fade top>
        <Form
          style={{
            height: "35rem",
          }}
        >
          <ContainerTitleForm>
            <FaUserPlus color="aliceblue" size={30} />
          </ContainerTitleForm>
          <TitleForm>הרשמה</TitleForm>
          <ContainerInput>
            <InputForm
              style={{
                textAlign: "right",
              }}
              type="phone"
              placeholder="מספר פלאפון"
            />
            <ContainerIconAndLind>
              <SideLine />
              <FaPhone size={20} color="aliceblue" />
            </ContainerIconAndLind>
          </ContainerInput>
          <ContainerInput>
            <InputForm
              style={{
                textAlign: "right",
              }}
              type="password"
              placeholder="סיסמה"
            />
            <ContainerIconAndLind>
              <SideLine />
              <MdOutlinePassword size={25} color="aliceblue" />
            </ContainerIconAndLind>
          </ContainerInput>
          <ContainerInput>
            <InputForm
              style={{
                textAlign: "right",
              }}
              type="email"
              placeholder="אימייל"
            />
            <ContainerIconAndLind>
              <SideLine />
              <MdEmail size={25} color="aliceblue" />
            </ContainerIconAndLind>
          </ContainerInput>
          <ContainerInput>
            <InputForm
              style={{
                textAlign: "right",
              }}
              type="id"
              placeholder="תעודת זהות / ח.פ"
            />
            <ContainerIconAndLind>
              <SideLine />
              <FaRegIdCard size={25} color="aliceblue" />
            </ContainerIconAndLind>
          </ContainerInput>
          <ContainerInputImageFile>
            <InputImageFile
              style={{
                width: "7.5rem",
              }}
              type="file"
            />
            <ContainerIconAndLind>
              <SideLine />
              <BsImageFill size={25} color="aliceblue" />
            </ContainerIconAndLind>
          </ContainerInputImageFile>
          <div>
            <ButtonLoginAndSignUpPage>הירשם</ButtonLoginAndSignUpPage>
          </div>
        </Form>
      </Fade>
    </div>
  );
};

export default SignUpComp;
