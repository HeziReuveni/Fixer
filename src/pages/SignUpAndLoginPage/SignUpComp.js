import React, { useState, useContext } from "react";
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
import { FaRegIdCard, FaUserTie } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Fade } from "react-reveal";
import { sendSms } from "../apis/auth";
import { UserContext } from "../context/context";
import ImagesUploading from "../multipurpose/ImagesUploading";

import PopUpValidation from "./PopUpValidation";

const SignUpComp = () => {
  const [popUp, setPopUp] = useState(false);
  const [popUpImagesUploading, setPopUpImagesUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [formDataSignUp, setFormDataSignUp] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
    email: "",
    idNumber: "",
  });
  const { setName, setImgUrl } = useContext(UserContext);
  const { fullName, phoneNumber, password, email, idNumber } = formDataSignUp;

  const onChange = (e) => {
    e.preventDefault();
    setFormDataSignUp({ ...formDataSignUp, [e.target.name]: e.target.value });
  };

  const handleDetailsToSignUp = (e) => {
    e.preventDefault();
    if (fullName && phoneNumber && password && email && idNumber) {
      setImgUrl(imageUrl);
      setName(fullName);
      setPopUp(true);
      sendSms(phoneNumber);
    } else {
      setPopUp(false);
    }
  };

  return (
    <div>
      {popUp && (
        <PopUpValidation
          fullName={fullName}
          phoneNumber={phoneNumber}
          password={password}
          email={email}
          idNumber={idNumber}
          imageUrl={imageUrl}
          setPopUp={setPopUp}
        />
      )}
      {popUpImagesUploading && (
        <ImagesUploading setPopUpImagesUploading={setPopUpImagesUploading} />
      )}
      <Fade top>
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "7%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Form
            onSubmit={handleDetailsToSignUp}
            style={{
              height: "40rem",
            }}
          >
            <ContainerTitleForm>
              <FaUserPlus color="aliceblue" size={30} />
            </ContainerTitleForm>
            <TitleForm>הרשמה</TitleForm>
            <ContainerInput>
              <InputForm
                required
                onChange={onChange}
                name="fullName"
                value={fullName}
                style={{
                  textAlign: "right",
                }}
                placeholder="הזן שם מלא"
              />
              <ContainerIconAndLind>
                <SideLine />
                <FaUserTie size={20} color="aliceblue" />
              </ContainerIconAndLind>
            </ContainerInput>
            <ContainerInput>
              <InputForm
                required
                onChange={onChange}
                name="phoneNumber"
                value={phoneNumber}
                style={{
                  textAlign: "right",
                  background: "none",
                }}
                placeholder="מספר פלאפון"
              />
              <ContainerIconAndLind>
                <SideLine />
                <FaPhone size={20} color="aliceblue" />
              </ContainerIconAndLind>
            </ContainerInput>
            <ContainerInput>
              <InputForm
                required
                onChange={onChange}
                name="password"
                value={password}
                style={{
                  textAlign: "right",
                }}
                type="password"
                placeholder="בחר סיסמה"
              />
              <ContainerIconAndLind>
                <SideLine />
                <MdOutlinePassword size={25} color="aliceblue" />
              </ContainerIconAndLind>
            </ContainerInput>
            <ContainerInput>
              <InputForm
                required
                onChange={onChange}
                name="email"
                value={email}
                style={{
                  textAlign: "right",
                }}
                placeholder="אימייל"
              />
              <ContainerIconAndLind>
                <SideLine />
                <MdEmail size={25} color="aliceblue" />
              </ContainerIconAndLind>
            </ContainerInput>
            <ContainerInput>
              <InputForm
                required
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
                onClick={() => setPopUpImagesUploading(!popUpImagesUploading)}
              >
                הוסף תמונה (לא חובה)
              </InputImageFile>
              <ContainerIconAndLind>
                <SideLine
                  style={{
                    marginRight: "0.4rem",
                  }}
                />
                <BsImageFill
                  style={{
                    marginRight: "0.1rem",
                  }}
                  size={25}
                  color="aliceblue"
                />
              </ContainerIconAndLind>
            </ContainerInputImageFile>
            <div>
              <ButtonLoginAndSignUpPage>הירשם</ButtonLoginAndSignUpPage>
            </div>
          </Form>
        </div>
      </Fade>
    </div>
  );
};

export default SignUpComp;
