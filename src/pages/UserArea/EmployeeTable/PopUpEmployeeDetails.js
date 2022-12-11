import React from "react";
import { FiX } from "react-icons/fi";
import { Fade } from "react-reveal";
import { RemoveScroll } from "react-remove-scroll";
import img from "../UserPrivateArea/gifs/unuser.png";
import {
  ContainerImageAndTitleEmployee,
  ContainerDetailsEmployee,
  ImageEmployeeDetails,
} from "./styles";

const PopUpEmployeeDetails = ({
  setOpenPupUpDetails,
  employeeDetails,
  setEmployeeDetails,
}) => {
  return (
    <RemoveScroll>
      <Fade>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
            position: "fixed",
            zIndex: "2",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(15px)",
          }}
        >
          <div
            onClick={() => {
              setOpenPupUpDetails(false);
              setEmployeeDetails([]);
            }}
            style={{
              position: "fixed",
              top: "10px",
              right: "10px",
              zIndex: "3",
            }}
          >
            <FiX size={20} color="#3225bf" />
          </div>
          <ContainerImageAndTitleEmployee>
            <ImageEmployeeDetails
              src={employeeDetails.imageUrl ? employeeDetails.imageUrl : img}
            />
            <div>{employeeDetails.fullName && employeeDetails.fullName}</div>
          </ContainerImageAndTitleEmployee>
          <ContainerDetailsEmployee>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {employeeDetails.email && "פרטי העובד"}
            </div>
            <div>{employeeDetails.email && employeeDetails.email}</div>
            <div>{employeeDetails.role}</div>
            <div>{employeeDetails.salary}</div>
          </ContainerDetailsEmployee>
        </div>
      </Fade>
    </RemoveScroll>
  );
};

export default PopUpEmployeeDetails;
