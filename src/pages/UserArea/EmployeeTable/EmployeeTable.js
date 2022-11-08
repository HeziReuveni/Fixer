import React from "react";
import { ContainerTablePage } from "./styles";
import EmployeeListToMobile from "./EmployeeListToMobile";
import AddUserToList from "./AddUserToList";


const EmployeeTable = () => {
  return (
    <ContainerTablePage>
      <EmployeeListToMobile />
      <AddUserToList />
    </ContainerTablePage>
  );
};

export default EmployeeTable;
