import React, { useState, useContext } from "react";
import {
  Form,
  TitleForm,
  ContainerInput,
  InputForm,
  ButtonLoginAndSignUpPage,
  ContainerIconAndLind,
  SideLine,
  InputImageFile,
  ContainerInputImageFile,
} from "./styles";
import { FaPhone } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { BsImageFill } from "react-icons/bs";
import { FaRegIdCard, FaUserTie } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Fade } from "react-reveal";
import { sendSms } from "../apis/auth";
import { UserContext } from "../context/context";
import ImagesUploading from "../multipurpose/ImagesUploading";
import { FiX } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import { signUp } from "../apis/auth";
import PopUpValidation from "./PopUpValidation";

const SignUpComp = ({ setSignupPage, setFirstView }) => {
  const [popUp, setPopUp] = useState(false);
  const [popUpImagesUploading, setPopUpImagesUploading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [formDataSignUp, setFormDataSignUp] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
    email: "",
    idNumber: "",
  });
  const { setName, setImgUrl, imgUrl } = useContext(UserContext);
  const { fullName, phoneNumber, password, email, idNumber } = formDataSignUp;

  const onChange = (e) => {
    e.preventDefault();
    setFormDataSignUp({ ...formDataSignUp, [e.target.name]: e.target.value });
  };

  const handleDetailsToSignUp = async (e) => {
    e.preventDefault();
    const response = await signUp(
      fullName,
      phoneNumber,
      password,
      email,
      idNumber,
      imgUrl
    );
    if (response) {
      setPopUp(true);
      sendSms(phoneNumber);
    } else {
      setPopUp(false);
    }
  };

  return (
    <div>
      {popUpImagesUploading && (
        <Fade>
          <div
            style={{
              position: "fixed",
              right: "0%",
              top: "0%",
              zIndex: "2",
              height: "100%",
              width: "100%",
            }}
          >
            <ImagesUploading
              setPopUpImagesUploading={setPopUpImagesUploading}
              setSelectedImg={setSelectedImg}
              setImageUrl={setImageUrl}
              setImgUrl={setImgUrl}
              imageUrl={imageUrl}
            />
          </div>
        </Fade>
      )}
      <Fade>
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            zIndex: "1",
            color: "#87bcde",
          }}
        >
          <FiX
            size={20}
            onClick={() => {
              setSignupPage(false);
              setFirstView(true);
            }}
          />
        </div>
      </Fade>
      {popUp && (
        <PopUpValidation
          fullName={fullName}
          phoneNumber={phoneNumber}
          password={password}
          email={email}
          idNumber={idNumber}
          imageUrl={imageUrl}
          imgUrl={imgUrl}
          setPopUp={setPopUp}
        />
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
            popUpImagesUploading={popUpImagesUploading}
            popUp={popUp}
            onSubmit={handleDetailsToSignUp}
            style={{
              height: "42rem",
            }}
          >
            <RiUserAddFill color="#87bcde" size={40} />
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
                <FaUserTie size={20} color="#87bcde" />
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
                <FaPhone size={20} color="#87bcde" />
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
                <MdOutlinePassword size={25} color="#87bcde" />
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
                <SiGmail size={25} color="#87bcde" />
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
                <FaRegIdCard size={25} color="#87bcde" />
              </ContainerIconAndLind>
            </ContainerInput>
            <ContainerInputImageFile>
              <InputImageFile
                onClick={() => {
                  {
                    setPopUpImagesUploading(!popUpImagesUploading);
                  }
                }}
              >
                {selectedImg ? (
                  <BiCheck size={35} color="rgb(0, 179, 0)" />
                ) : (
                  " הוסף תמונה (לא חובה)"
                )}
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
                  color="#87bcde"
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
