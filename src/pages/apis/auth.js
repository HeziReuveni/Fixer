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
