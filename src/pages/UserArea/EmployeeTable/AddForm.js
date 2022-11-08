import React from "react";
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
import {
  ContainerInputAddForm,
  InputAddForm,
  InputAddImageFile,
  ContainerInputAddImageFile,
} from "./styles";
import { Fade } from "react-reveal";

const AddForm = () => {
  return (
    <>
      <Fade top>
        <form
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
            <InputAddForm placeholder="שם מלא" />
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
            <InputAddForm placeholder="תפקיד" />
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
            <InputAddForm placeholder="שכר" />
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
            <InputAddForm placeholder="אימייל" />
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
    </>
  );
};

export default AddForm;
