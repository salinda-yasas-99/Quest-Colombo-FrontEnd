import { privateAxios } from "./axiosInstance";

export const getAllBoookingByUserId = async (userId) => {
  try {
    const response = await privateAxios.get(`/api/bookings/user/${userId}`);
    console.log("getAllBookingByUser::", response);
    return response.data.data;
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
