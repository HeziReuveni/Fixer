import Axios from "axios";

export const getUserDetails = async () => {
  const response = await Axios.get(
    `${process.env.REACT_APP_BASE_URL}/get-user-details`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
