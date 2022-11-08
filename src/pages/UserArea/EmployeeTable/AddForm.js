import React, { useState, useEffect } from "react";
import {
  ContainerIconAndLind,
  SideLine,
  ButtonValidation,
} from "../../SignUpAndLoginPage/styles";
import { RiUserAddFill } from "react-icons/ri";
import { BsImageFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { TfiMoney } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import {
  ContainerInputAddForm,
  InputAddForm,
  InputAddImageFile,
  ContainerInputAddImageFile,
  ContainerMessageSuccess,
  TextNameMessageSuccess,
} from "./styles";
import { Fade, Zoom } from "react-reveal";
import { addEmployee } from "../../apis/auth";

const AddForm = () => {
  const [imageUrl, setImageUrl] = useState();
  const [messageSuccess, setMessageSuccess] = useState();

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
    const response = await addEmployee(fullName, role, salary, email, imageUrl);
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
    
  }, [handleSubmit]);

  return (
    <>
      {!messageSuccess ? (
        <Fade top>
          <form
            onSubmit={handleSubmit}
            style={{
              height: "26rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "80%",
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(0, 76, 175, 0.2)",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <RiUserAddFill size={25} color="#3225bf" />
            </div>
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
            <ContainerInputAddImageFile>
              <InputAddImageFile
                style={{
                  width: "8.3rem",
                }}
                type="file"
              />
              <ContainerIconAndLind>
                <SideLine
                  style={{
                    borderLeft: "2px solid #3225bf",
                  }}
                />
                <BsImageFill size={22} color="#3225bf" />
              </ContainerIconAndLind>
            </ContainerInputAddImageFile>
            <ButtonValidation
              type="submit"
              style={{
                border: "2px solid #3225bf",
                color: "#3225bf",
                borderRadius: "10px",
              }}
            >
              הוסף
            </ButtonValidation>
          </form>
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
