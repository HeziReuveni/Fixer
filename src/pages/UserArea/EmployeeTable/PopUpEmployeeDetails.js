import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { Fade } from "react-reveal";
import { RemoveScroll } from "react-remove-scroll";
import img from "../UserPrivateArea/gifs/unuser.png";
import { AiFillEdit } from "react-icons/ai";
import { RiUserUnfollowFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { useFormattedDate } from "./Hooks/useFormattedDate";
import { useFetchEmployee } from "./Hooks/useFetchEmployees";
import { deleteEmployee, editEmployee } from "../../apis/table";

import {
  ContainerImageAndTitleEmployee,
  ContainerDetailsEmployee,
  ImageEmployeeDetails,
  MiniTitle,
  ContainerButtons,
  ContainerIcons,
  PopUpEmployeeDeleted,
  EditInput,
} from "./styles";

const PopUpEmployeeDetails = ({
  setOpenPupUpDetails,
  employeeDetails,
  setEmployeeDetails,
  getSingleEmployee,
}) => {
  const [messageDeleteEmployee, setMessageDeleteEmployee] = useState(false);
  const [openEditInput, setOpenEditInput] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    salary: "",
    email: "",
  });

  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;
  useEffect(() => {
    setFormData({
      fullName: employeeDetails.fullName,
      role: employeeDetails.role,
      salary: employeeDetails.salary,
      email: employeeDetails.email,
    });
  }, [employeeDetails]);

  const { fullName, role, salary, email } = formData;
  const [id, setId] = useState(null);
  const employees = useFetchEmployee(id);

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const thisDate = useFormattedDate(employeeDetails.createdAt);

  const handleDeleteEmployee = async (id) => {
    const response = await deleteEmployee(id);
    if (response) {
      setMessageDeleteEmployee(true);
      setId(id);
      setTimeout(() => {
        setMessageDeleteEmployee(false);
        setOpenPupUpDetails(false);
      }, 3000);
    } else {
      setMessageDeleteEmployee(false);
    }
  };

  const handleEditEmployee = async (id) => {
    const { fullName, email, salary, role } = formData;
    await editEmployee(id, fullName, email, role, salary);
    setId(id);
    const result = await getSingleEmployee(id);
    setEmployeeDetails(result);
    setOpenEditInput(false);
  };

  return (
    <RemoveScroll>
      {messageDeleteEmployee && (
        <PopUpEmployeeDeleted>
          <Fade>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "whitesmoke",
                fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
                fontWeight: "bold",
              }}
            >
              <div>
                <RiUserUnfollowFill color="rgb(255, 76, 76)" size={40} />
              </div>
              <div>{employeeDetails.fullName}</div>
              <div>נמחק/ה מהמערכת</div>
            </div>
          </Fade>
        </PopUpEmployeeDeleted>
      )}

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
            backgroundColor: "#3225bf",
            backgroundImage: url(true),
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
            <FiX size={20} color="whitesmoke" />
          </div>
          <ContainerImageAndTitleEmployee>
            <ImageEmployeeDetails
              src={employeeDetails.imageUrl ? employeeDetails.imageUrl : img}
            />
            <div
              style={{
                textAlign: "center",
                fontSize: "1.8rem",
                fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
                padding: "0.8rem",
                color: "whitesmoke",
                fontWeight: "bold",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                minWidth: "50%",
              }}
            >
              {!openEditInput ? (
                employeeDetails.fullName
              ) : (
                <EditInput
                  style={{
                    fontSize: "1.2rem",
                  }}
                  onChange={onChange}
                  name="fullName"
                  value={fullName}
                />
              )}
            </div>
          </ContainerImageAndTitleEmployee>
          <ContainerDetailsEmployee>
            <div
              style={{
                height: "25vh",
                flexDirection: "column",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "space-evenly",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                paddingRight: "1.5rem",
                padding: "1rem",
              }}
            >
              <div>
                <span
                  style={{
                    color: "whitesmoke",
                  }}
                >
                  {" "}
                  {!openEditInput ? (
                    employeeDetails.email
                  ) : (
                    <EditInput onChange={onChange} name="email" value={email} />
                  )}
                </span>

                <MiniTitle> : אימייל</MiniTitle>
              </div>
              <div dir="rtl">
                <MiniTitle> תפקיד :</MiniTitle>
                &nbsp;
                <span
                  style={{
                    color: "whitesmoke",
                  }}
                >
                  {!openEditInput ? (
                    employeeDetails.role
                  ) : (
                    <EditInput onChange={onChange} name="role" value={role} />
                  )}
                </span>
              </div>
              <div dir="rtl">
                <MiniTitle> שכר &nbsp;&nbsp;&nbsp;:</MiniTitle>
                &nbsp;
                <span
                  style={{
                    color: "whitesmoke",
                  }}
                >
                  {!openEditInput ? (
                    employeeDetails.salary
                  ) : (
                    <EditInput
                      onChange={onChange}
                      name="salary"
                      value={salary}
                    />
                  )}
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "whitesmoke",
                  }}
                >
                  {thisDate}
                </span>
                <MiniTitle> : תחילת עבודה</MiniTitle>
              </div>
            </div>
          </ContainerDetailsEmployee>
          <ContainerButtons>
            <ContainerIcons onClick={() => setOpenEditInput(!openEditInput)}>
              {openEditInput ? (
                <FiX size={30} color="whitesmoke" />
              ) : (
                <AiFillEdit size={30} color="whitesmoke" />
              )}
            </ContainerIcons>
            {openEditInput && (
              <Fade bottom>
                <ContainerIcons
                  onClick={() => handleEditEmployee(employeeDetails._id)}
                >
                  <IoIosSave size={30} color="whitesmoke" />
                </ContainerIcons>
              </Fade>
            )}
            <ContainerIcons>
              <MdDelete
                onClick={() => handleDeleteEmployee(employeeDetails._id)}
                size={30}
                color="whitesmoke"
              />
            </ContainerIcons>
          </ContainerButtons>
        </div>
      </Fade>
    </RemoveScroll>
  );
};

export default PopUpEmployeeDetails;
