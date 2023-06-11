import React, { useEffect, useContext, useState } from "react";
import img from "../UserPrivateArea/gifs/unuser.png";
import {
  ContainerTitle,
  ContainerUl,
  ContainerLi,
  Image,
  ContainerTextRow,
  ContainerIconRow,
  ButtonReturnHomePage,
  OpenSearchUser,
  InputSearch,
} from "./styles";
import WaveBorder from "../../SignUpAndLoginPage/WaveBorder";
import { Fade, Zoom } from "react-reveal";
import { TiInfoLarge } from "react-icons/ti";
import { ImHome } from "react-icons/im";
import { RiUserSearchFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/context";
import { getEmployees } from "../../apis/table";
import gif from "./gifs/loading.gif";
import PopUpEmployeeDetails from "./PopUpEmployeeDetails";
import { getSingleEmployee } from "../../apis/table";
import { FiX } from "react-icons/fi";

const EmployeeListToMobile = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [openPopUpDetails, setOpenPupUpDetails] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const { employees, setEmployees } = useContext(UserContext);
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;
  let history = useHistory();
  const fetchEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEmployeeDetails = async (id) => {
    setOpenPupUpDetails(true);
    const result = await getSingleEmployee(id);
    setEmployeeDetails(result);
  };

  const handleSearchInput = () => {
    setOpenSearchInput(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {openPopUpDetails && (
        <PopUpEmployeeDetails
          setOpenPupUpDetails={setOpenPupUpDetails}
          employees={employees}
          employeeDetails={employeeDetails}
          setEmployeeDetails={setEmployeeDetails}
          getSingleEmployee={getSingleEmployee}
        />
      )}
      <ButtonReturnHomePage onClick={() => history.push("/user-area")}>
        <ImHome />
      </ButtonReturnHomePage>
      <Fade top>
        <div>
          <ContainerTitle
            style={{
              backgroundImage: url(true),
            }}
          >
            טבלת עובדים
          </ContainerTitle>
          <WaveBorder upperColor="#0049b7" lowerColor="white" />
        </div>
      </Fade>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {openSearchInput && (
            <Fade>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "70%",
                  height: "8vh",
                  marginTop: "1rem",
                  backgroundColor: "rgb(50, 37, 191)",
                  boxShadow: "0px 0px 10px gray",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50px",
                    padding: "0.4rem",
                  }}
                  onClick={() => setOpenSearchInput(false)}
                >
                  <FiX
                    onClick={() => setValueSearch("")}
                    size={20}
                    color="whitesmoke"
                  />
                </div>

                <InputSearch
                  value={valueSearch}
                  onChange={(e) => setValueSearch(e.target.value)}
                  dir="rtl"
                  placeholder="הזן את שם העובד"
                />
              </div>
            </Fade>
          )}
        </div>
        <Zoom>
          <ContainerUl>
            {employees &&
              employees
                .filter((value) => {
                  if (valueSearch === "") {
                    return value;
                  } else if (value.fullName.includes(valueSearch)) {
                    return value;
                  }
                })
                .map((item, key) => (
                  <ContainerLi key={key}>
                    <ContainerIconRow>
                      <TiInfoLarge
                        size={25}
                        onClick={() => handleEmployeeDetails(item._id)}
                      />
                    </ContainerIconRow>
                    <ContainerTextRow>
                      <div
                        style={{
                          fontSize: "1.3rem",
                        }}
                      >
                        {item.fullName}
                      </div>
                      <div>{item.role}</div>
                    </ContainerTextRow>
                    <Image src={item.imageUrl ? item.imageUrl : img} />
                  </ContainerLi>
                ))}
          </ContainerUl>
        </Zoom>
        {employees === null && (
          <img
            width="200"
            src={gif}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          />
        )}
      </div>
      <OpenSearchUser>
        <Fade>
          <RiUserSearchFill
            onClick={handleSearchInput}
            size={35}
            color="#3225bf"
          />
        </Fade>
      </OpenSearchUser>
    </div>
  );
};

export default EmployeeListToMobile;
