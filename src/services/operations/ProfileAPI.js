import { toast } from "react-hot-toast";

import { setLoading, setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";
import { logout } from "./AuthAPI";

const {
  GET_USER_DETAILS_API,
  GET_FULL_PROFILE_API,
} = profileEndpoints;

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      });
      //console.log("GET_USER_DETAILS API RESPONSE............", response)

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
      toast.error("Could not get user details");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export async function getFullProfile() {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_FULL_PROFILE_API);

      console.log(
        "GET_FULL_PROFILE_API RESPONSE............",
        response,
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log("GET_FULL_PROFILE_API ERROR............", error);
      toast.error("Can NOT get user profile!");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}
