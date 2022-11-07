import React, { useState } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import { ButtonAddUser } from "./styles";
import { Fade } from "react-reveal";
import { RemoveScroll } from "react-remove-scroll";
import AddForm from "./AddForm";

const ButtonAddUserToList = () => {
  const [displayIcon, setDisplayIcon] = useState(true);
  return (
    <>
      {!displayIcon ? (
        <RemoveScroll>
          {!displayIcon ? (
            <Fade>
              <div
                onClick={() => setDisplayIcon(true)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: "1",
                }}
              >
                <FiX size={20} color="#3225bf" />
              </div>
            </Fade>
          ) : null}
          <Fade>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "fixed",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(15px)",
              }}
            >
              <AddForm />
            </div>
          </Fade>
        </RemoveScroll>
      ) : null}
      {displayIcon ? (
        <ButtonAddUser onClick={() => setDisplayIcon(false)}>
          <Fade>
            <RiUserAddFill size={25} color="#3225bf" />
          </Fade>
        </ButtonAddUser>
      ) : null}
    </>
  );
};

export default ButtonAddUserToList;