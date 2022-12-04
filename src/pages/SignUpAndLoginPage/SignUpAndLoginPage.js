import React, { useContext } from "react";
import { UserContext } from "../context/context";
import LoginComp from "./LoginComp";
import SignUpComp from "./SignUpComp";

const SignUpAndLoginPage = () => {
  const { loginPage, setLoginPage, signupPage, setSignupPage, setFirstView } =
    useContext(UserContext);

  return (
    <div>
      {loginPage && (
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            height: "100%",
            minHeight: "45rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(20px)",
            boxShadow: "0x 0x 10px white",
          }}
        >
          <LoginComp setLoginPage={setLoginPage} setFirstView={setFirstView} />
        </div>
      )}
      {signupPage && (
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            height: "100%",
            minHeight: "45rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(20px)",
          }}
        >
          <SignUpComp
            setSignupPage={setSignupPage}
            setFirstView={setFirstView}
          />
        </div>
      )}
    </div>
  );
};

export default SignUpAndLoginPage;
