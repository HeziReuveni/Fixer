import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [loginPage, setLoginPage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [firstView, setFirstView] = useState(true);

  return (
    <UserContext.Provider
      value={{
        setLoginPage,
        loginPage,
        signupPage,
        setSignupPage,
        setFirstView,
        firstView,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
