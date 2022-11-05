import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [loginPage, setLoginPage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [firstView, setFirstView] = useState(true);
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  return (
    <UserContext.Provider
      value={{
        setLoginPage,
        loginPage,
        signupPage,
        setSignupPage,
        setFirstView,
        firstView,
        setName,
        name,
        imgUrl,
        setImgUrl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
