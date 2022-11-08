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

export const addEmployee = async (fullName, role, salary, email, imageUrl) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/create-user-details`,
      {
        fullName,
        role,
        salary,
        email,
        imageUrl,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEmployees = async () => {
  try {
    const response = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/get-employees`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
