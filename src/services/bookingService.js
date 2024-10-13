import { privateAxios } from "./axiosInstance";

export const getAllBookingById = async (userId) => {
  try {
    const response = await privateAxios.get(
      `/api/feedbacks/bookings/user/${userId}`
    );
    console.log("responses: service::", response);
    return response.data;
  } catch (error) {
    throw error.response ? error.response : error;
  }
};

export const createBooking = async (data, userId) => {
  try {
    const response = await privateAxios.post(
      `/api/bookings?userId=${userId}`,
      data
    );
    console.log("responses: service::", response);
    return response.data;
  } catch (error) {
    throw error.response ? error.response : error;
  }
};
