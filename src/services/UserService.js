import { privateAxios } from "./axiosInstance";

export const getAllUsers = async (role) => {
  try {
    const response = await privateAxios.get(`api/user?role=${role}`);
    console.log("responses: service::", response);
    return response.data;
  } catch (error) {
    throw error.response ? error.response : error;
  }
};

export const createAdmin = async (data) => {
  try {
    const response = await privateAxios.post("/api/register", data);
    console.log("responses: service::", response);
    return response.data;
  } catch (error) {
    throw error.response ? error.response : error;
  }
};

export const deleteUserById = async (id) => {
  try {
    const response = await privateAxios.delete(`/api/user/${id}`);
    console.log("responses: service::", response);
    return response.data;
  } catch (error) {
    throw error.response ? error.response : error;
  }
};
