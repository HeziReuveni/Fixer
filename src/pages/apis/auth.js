import Axios from "axios";

export const signUp = async (
  fullName,
  phoneNumber,
  password,
  email,
  idNumber,
  imageUrl
) => {
  const response = await Axios.post(
    `${process.env.REACT_APP_BASE_URL}/create-details`,
    {
      fullName,
      phoneNumber,
      password,
      email,
      idNumber,
      imageUrl,
    }
  );
  console.log(response);
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
