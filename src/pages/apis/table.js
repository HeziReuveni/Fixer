import Axios from "axios";

export const addEmployee = async (fullName, role, salary, email, imageUrl) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/create-user-employees`,
      {
        fullName,
        role,
        salary,
        email,
        imageUrl,
        token: localStorage.getItem("token"),
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
      `${process.env.REACT_APP_BASE_URL}/get-employees`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
