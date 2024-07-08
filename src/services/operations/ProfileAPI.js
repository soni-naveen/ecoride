import { toast } from "react-hot-toast";

import { setLoading, setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";
import { logout } from "./AuthAPI";

const {
  GET_USER_DETAILS_API,
  FULL_PROFILE_API,
  GET_INBOX_MESSAGES_API,
  GET_CHATS_API,
  DELETE_INBOX_MESSAGE_API,
} = profileEndpoints;

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      });
      // console.log("GET_USER_DETAILS API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.data }));
    } catch (error) {
      dispatch(logout(navigate));
      console.log("GET_USER_DETAILS API ERROR............", error);
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export const getFullProfile = async (profileId) => {
  let result = null;
  try {
    const response = await apiConnector("POST", FULL_PROFILE_API, {
      profileId,
    });
    // console.log("FULL_PROFILE_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    console.log("FULL_PROFILE_API API ERROR............", error);
    result = error.response.data;
  }
  return result;
};

export const getInboxMessages = async (inboxId) => {
  let result = null;
  try {
    const response = await apiConnector("POST", GET_INBOX_MESSAGES_API, {
      inboxId,
    });
    // console.log("GET_INBOX_MESSAGES_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    // console.log("GET_INBOX_MESSAGES_API API ERROR............", error);
    result = error.response.data;
  }
  return result;
};

export const getChats = async (token) => {
  let result = null;
  try {
    const response = await apiConnector("GET", GET_CHATS_API, null, {
      Authorization: `Bearer ${token}`,
    });
    // console.log("GET_CHATS_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    // console.log("GET_CHATS_API API ERROR............", error);
    result = error.response.data;
  }
  return result;
};

export const deleteInboxMessage = (token, msg) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        DELETE_INBOX_MESSAGE_API,
        {
          msg,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      // console.log("DELETE_INBOX_MESSAGES_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.data }));
    } catch (error) {
      console.log("DELETE_INBOX_MESSAGES_API API ERROR............", error);
    }
    dispatch(setLoading(false));
  };
};
