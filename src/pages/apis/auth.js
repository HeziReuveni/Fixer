import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return request;
});

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
    const response = await axiosInstance.post(`/login`, {
      email,
      password,
    });
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

export const sendCodeToEmail = async (email) => {
  try {
    await axiosInstance.post("/send-email", {
      email,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const checkOptCode = async (userCode) => {
  try {
    await axiosInstance.post("/check-code", {
      userCode,
    });
    return true;
  } catch (error) {
    return false;
  }
};
