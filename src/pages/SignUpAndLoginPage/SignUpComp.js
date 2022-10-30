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
  const [formDataSignUp, setFormDataSignUp] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
    email: "",
    idNumber: "",
    imageUrl: "",
  });

  const { fullName, phoneNumber, password, email, idNumber, imageUrl } =
    formDataSignUp;

  const onChange = (e) => {
    e.preventDefault();
    setFormDataSignUp({
      ...formDataSignUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleDetailsToSignUp = (e) => {
    e.preventDefault();
    console.log(formDataSignUp);
  };

  const [image, setImage] = useState();
  const onChangeImage = (e) => setImage(URL.createObjectURL(e.target.files[0]));
  console.log(image);
  return (
    <div>
      <Fade top>
        <Form
          onSubmit={handleDetailsToSignUp}
          style={{
            height: "38rem",
          }}
        >
          <ContainerTitleForm>
            <FaUserPlus color="aliceblue" size={30} />
          </ContainerTitleForm>
          <TitleForm>הרשמה</TitleForm>
          <ContainerInput>
            <InputForm
              onChange={onChange}
              name="fullName"
              value={fullName}
              style={{
                textAlign: "right",
              }}
              type="name"
              placeholder="הזן שם מלא"
            />
            <ContainerIconAndLind>
              <SideLine />
              <FaPhone size={20} color="aliceblue" />
            </ContainerIconAndLind>
          </ContainerInput>
          <ContainerInput>
            <InputForm
              onChange={onChange}
              name="phoneNumber"
              value={phoneNumber}
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
              onChange={onChange}
              name="password"
              value={password}
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
              onChange={onChange}
              name="email"
              value={email}
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
              onChange={onChange}
              name="idNumber"
              value={idNumber}
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
              onChange={(e) => onChangeImage(e)}
              name="imageUrl"
              value={imageUrl}
              style={{
                width: "7.6rem",
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
      {image && <img src={image} alt="The current file" />}
    </div>
  );
};

export default SignUpComp;
