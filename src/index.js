import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserContextProvider from "./pages/context/context";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <UserContextProvider>
//     <App />
//   </UserContextProvider>
//   // </React.StrictMode>
// );

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById("root")
);
