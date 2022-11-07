import React from "react";
import { ContainerTablePage } from "./styles";
import EmployeeListToMobile from "./EmployeeListToMobile";
import ButtonAddUserToList from "./ButtonAddUserToList";

const EmployeeTable = () => {
  return (
    <ContainerTablePage>
      <EmployeeListToMobile />
      <ButtonAddUserToList />
    </ContainerTablePage>
  );
};

export default EmployeeTable;
