import React, { useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";
import CenterContent from "./CenterContent";
import BottomNavbar from "./BottomNavbar";
import { ContainerUserHomePage } from "./styles";
import { getUserDetails } from "../../apis/privateArea";
import { useHistory } from "react-router-dom";

const UserPrivateArea = () => {
  const [fullName, setFullName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  let history = useHistory();

  useEffect(() => {
    getUserDetails()
      .then((response) => {
        setFullName(response[0].fullName);
        setImgUrl(response[0].imgUrl);
      })
      .catch(() => {
        history.push("/");
      });
  }, []);

  return (
    <ContainerUserHomePage>
      <TopNavbar fullName={fullName} imgUrl={imgUrl} />
      <CenterContent />
      <BottomNavbar />
    </ContainerUserHomePage>
  );
};

export default UserPrivateArea;
