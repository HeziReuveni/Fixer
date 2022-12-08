import Axios from "axios";

export const signUp = async (
  fullName,
  phoneNumber,
  password,
  email,
  idNumber,
  imgUrl
) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/create-user`,
      {
        fullName,
        phoneNumber,
        password,
        email,
        idNumber,
        imgUrl,
      }
    );
    const token = response.data;
    localStorage.setItem("token", token);
    return true;
  } catch (error) {
    return false;
  }
};

export const login = async (email, password) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/login`,
      {
        email,
        password,
      }
    );
    const token = response.data;
    localStorage.setItem("token", token);
    return true;
  } catch (error) {
    return false;
  }
};

export const sendSms = async (phoneNumber) => {
  await Axios.post(`${process.env.REACT_APP_BASE_URL}/send-sms`, {
    phoneNumber,
  });
};

export const checkOptCode = async (userCode) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/check-code`,
      {
        userCode,
      }
    );
    return true;
  } catch (error) {
    return false;
  }
};
