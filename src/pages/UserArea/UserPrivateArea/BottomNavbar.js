import React from "react";
import { ContainerBottomNavbar, ContainerIconBottomNavbar } from "./styles";
import { TbMathSymbols } from "react-icons/tb";
import { BsTable } from "react-icons/bs";
import { GiPapers } from "react-icons/gi";
import { HiOutlinePaperClip } from "react-icons/hi";
import { IoIosHelpBuoy } from "react-icons/io";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Fade bottom>
        <ContainerBottomNavbar
          style={{
            backgroundImage: url(true),
          }}
        >
          <Link to="/help">
            <ContainerIconBottomNavbar>
              <IoIosHelpBuoy size={30} />
            </ContainerIconBottomNavbar>
          </Link>
          <Link to="/papers">
            <ContainerIconBottomNavbar>
              <HiOutlinePaperClip size={30} />
            </ContainerIconBottomNavbar>
          </Link>
          {/* <Link to="/papers">
            <ContainerIconBottomNavbar>
              <GiPapers size={30} />
            </ContainerIconBottomNavbar>
          </Link> */}
          <Link to="/employee-table">
            <ContainerIconBottomNavbar>
              <BsTable size={30} />
            </ContainerIconBottomNavbar>
          </Link>
          <Link to="/calculator">
            <ContainerIconBottomNavbar>
              <TbMathSymbols size={30} />
            </ContainerIconBottomNavbar>
          </Link>
        </ContainerBottomNavbar>
      </Fade>
    </div>
  );
};

export default BottomNavbar;
