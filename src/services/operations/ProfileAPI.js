import { toast } from "react-hot-toast";

import { setLoading, setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";
import { logout } from "./AuthAPI";

const { GET_USER_DETAILS_API, FULL_PROFILE_API } = profileEndpoints;

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      });
      // console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName}`;
      dispatch(setUser({ ...response.data.data, image: userImage }));
    } catch (error) {
      dispatch(logout(navigate));
      console.log("GET_USER_DETAILS API ERROR............", error);
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export const getFullProfile = async (userId, navigate) => {
  let result = null;
  try {
    const response = await apiConnector("POST", FULL_PROFILE_API, {
      userId,
    });
    // console.log("FULL_PROFILE_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    console.log("FULL_PROFILE_API API ERROR............", error);
    result = error.response.data;
    navigate("/error");
  }
  return result;
};
