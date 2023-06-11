import Axios from "axios";
import { axiosInstance } from "./auth";

export const addEmployee = async (fullName, role, salary, email, imageUrl) => {
  try {
    const response = await axiosInstance.post(`/create-user-employees`, {
      fullName,
      role,
      salary,
      email,
      imageUrl,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleEmployee = async (id) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/get-single-employee`,
      {
        id,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getEmployees = async () => {
  try {
    const response = await axiosInstance.get(`/get-employees`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axiosInstance.post("/delete-employee", {
      id,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const editEmployee = async (id, fullName, email, role, salary) => {
  try {
    const response = await axiosInstance.post("/edit-employee", {
      id,
      fullName,
      email,
      role,
      salary,
    });
    return response;
  } catch (error) {
    return error;
  }
};
