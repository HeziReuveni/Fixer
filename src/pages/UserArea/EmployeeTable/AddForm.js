import React, { useState, useEffect } from "react";
import ImagesUploadEmployee from "../../multipurpose/ImagesUploadEmployee";
import {
  ContainerIconAndLind,
  SideLine,
  ButtonValidation,
} from "../../SignUpAndLoginPage/styles";
import { BsImageFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { TfiMoney } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import {
  ContainerInputAddForm,
  InputAddForm,
  ContainerMessageSuccess,
  TextNameMessageSuccess,
  AddFormEmployee,
} from "./styles";
import { Fade, Zoom } from "react-reveal";
import { addEmployee } from "../../apis/table";
import {
  ContainerInputImageFile,
  InputImageFile,
} from "../../SignUpAndLoginPage/styles";

const AddForm = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [url, setUrl] = useState(null);
  const [messageSuccess, setMessageSuccess] = useState();
  const [imagesUploading, setImagesUploading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    salary: "",
    email: "",
  });
  const { fullName, role, salary, email } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addEmployee(fullName, role, salary, email, url);
    if (response) {
      setMessageSuccess(true);
      setTimeout(() => {
        setMessageSuccess(false);
      }, 3000);
    } else {
      setMessageSuccess(false);
    }
  };

  useEffect(() => {
    setUrl(imageUrl);
  }, [imageUrl]);

  return (
    <>
      {!messageSuccess ? (
        <Fade top>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddFormEmployee
              imagesUploading={imagesUploading}
              onSubmit={handleSubmit}
            >
              <ContainerInputAddForm>
                <InputAddForm
                  onChange={onChange}
                  name="fullName"
                  placeholder="שם מלא"
                />
                <ContainerIconAndLind>
                  <SideLine
                    style={{
                      borderLeft: "2px solid #3225bf",
                    }}
                  />
                  <FaUserTie size={25} color="#3225bf" />
                </ContainerIconAndLind>
              </ContainerInputAddForm>
              <ContainerInputAddForm>
                <InputAddForm
                  onChange={onChange}
                  name="role"
                  placeholder="תפקיד"
                />
                <ContainerIconAndLind>
                  <SideLine
                    style={{
                      borderLeft: "2px solid #3225bf",
                    }}
                  />
                  <HiAcademicCap size={25} color="#3225bf" />
                </ContainerIconAndLind>
              </ContainerInputAddForm>
              <ContainerInputAddForm>
                <InputAddForm
                  onChange={onChange}
                  name="salary"
                  placeholder="שכר"
                />
                <ContainerIconAndLind>
                  <SideLine
                    style={{
                      borderLeft: "2px solid #3225bf",
                    }}
                  />
                  <TfiMoney size={25} color="#3225bf" />
                </ContainerIconAndLind>
              </ContainerInputAddForm>
              <ContainerInputAddForm>
                <InputAddForm
                  onChange={onChange}
                  name="email"
                  placeholder="אימייל"
                />
                <ContainerIconAndLind>
                  <SideLine
                    style={{
                      borderLeft: "2px solid #3225bf",
                    }}
                  />
                  <MdEmail size={25} color="#3225bf" />
                </ContainerIconAndLind>
              </ContainerInputAddForm>
              <ContainerInputImageFile
                style={{
                  borderRadius: "0px",
                  color: "#3225bf",
                  borderBottom: "2px solid #3225bf",
                  fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
                }}
              >
                <InputImageFile
                  style={{
                    color: "#3225bf",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    {
                      setImagesUploading(!imagesUploading);
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
                      marginRight: "0.5rem",
                      borderLeft: "2px solid #3225bf",
                    }}
                  />
                  <BsImageFill
                    style={{
                      marginRight: "0.1rem",
                    }}
                    size={22}
                    color="#3225bf"
                  />
                </ContainerIconAndLind>
              </ContainerInputImageFile>
              <ButtonValidation
                type="submit"
                style={{
                  border: "none",
                  backgroundColor: "rgba(64, 153, 255, 0.150)",
                  letterSpacing: "2px",
                  color: "#3225bf",
                  borderRadius: "5px",
                }}
              >
                הוסף
              </ButtonValidation>
            </AddFormEmployee>
            {imagesUploading && (
              <ImagesUploadEmployee
                setImageUrl={setImageUrl}
                setImagesUploading={setImagesUploading}
              />
            )}
          </div>
        </Fade>
      ) : (
        <Zoom>
          <ContainerMessageSuccess>
            <RiUserFollowFill color="#14a34b" size={50} />
            <TextNameMessageSuccess>
              {fullName} נוסף בהצלחה
            </TextNameMessageSuccess>
          </ContainerMessageSuccess>
        </Zoom>
      )}
    </>
  );
};

export default AddForm;
