import React from "react";
import {
  ContainerInput,
  InputForm,
  ContainerIconAndLind,
  SideLine,
} from "../../SignUpAndLoginPage/styles";
import { FaPhone } from "react-icons/fa";

const AddForm = () => {
  return (
    <>
      <form
        style={{
          backgroundColor: "red",
          height: "22rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "90%",
        }}
      >
        <ContainerInput>
          <InputForm />
          <ContainerIconAndLind>
            <SideLine />
            <FaPhone size={20} color="aliceblue" />
          </ContainerIconAndLind>
        </ContainerInput>
        <ContainerInput>
          <InputForm />
          <ContainerIconAndLind>
            <SideLine />
            <FaPhone size={20} color="aliceblue" />
          </ContainerIconAndLind>
        </ContainerInput>
        <ContainerInput>
          <InputForm />
          <ContainerIconAndLind>
            <SideLine />
            <FaPhone size={20} color="aliceblue" />
          </ContainerIconAndLind>
        </ContainerInput>
        <ContainerInput>
          <InputForm />
          <ContainerIconAndLind>
            <SideLine />
            <FaPhone size={20} color="aliceblue" />
          </ContainerIconAndLind>
        </ContainerInput>
        <ContainerInput>
          <InputForm />
          <ContainerIconAndLind>
            <SideLine />
            <FaPhone size={20} color="aliceblue" />
          </ContainerIconAndLind>
        </ContainerInput>
      </form>
    </>
  );
};

export default AddForm;
