import { toast } from "react-hot-toast";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { settingsEndpoints } from "../apis";
import { logout } from "./AuthAPI";

const {
  UPDATE_DISPLAY_PICTURE_API,
  VERIFY_ID_API,
  COMPLETE_PROFILE_API,
  UPDATE_PROFILE_API,
  ABOUT_PROFILE_UPDATE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints;

export function verifyProfile(token, formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("PUT", VERIFY_ID_API, formData, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
      // console.log("VERIFY_ID_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser(response.data.updatedProfile));
      navigate("/dashboard/myprofile");
      toast.success("Govt. Id Uploaded Successfully");
    } catch (error) {
      //console.log("VERIFY_ID_API API ERROR............", error);
      toast.error("Couldn't upload your Govt.Id");
    }
    toast.dismiss(toastId);
  };
}

export function updateDisplayPicture(token, formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );

      // console.log("UPDATE_DISPLAY_PICTURE_API API RESPONSE.......", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser(response.data.data));
      navigate("/dashboard/myprofile");
      toast.success("Profile Picture Updated");
    } catch (error) {
      //console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error);
      toast.error("Could not update profile picture");
    }
    toast.dismiss(toastId);
  };
}

export function completeProfile(token, formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "PUT",
        COMPLETE_PROFILE_API,
        formData,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      // console.log("COMPLETE_PROFILE_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.updatedUserDetails }));

      toast.success("Account Created Successfully");
      navigate("/home");
    } catch (error) {
      //console.log("COMPLETE_PROFILE_API API ERROR............", error);
      toast.error("Could Not Update Profile");
    }
    toast.dismiss(toastId);
  };
}

export function myProfileAbout(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "PUT",
        ABOUT_PROFILE_UPDATE_API,
        formData,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      // console.log("ABOUT_PROFILE_UPDATE_API API RESPONSE..........", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.updatedUserDetails }));
      toast.success("Profile Updated Successfully");
    } catch (error) {
      //console.log("ABOUT_PROFILE_UPDATE_API API ERROR............", error);
      toast.error("Could Not Update Profile");
    }
    toast.dismiss(toastId);
  };
}

export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      });
      // console.log("UPDATE_PROFILE_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.updatedUserDetails }));
      toast.success("Profile Updated Successfully");
    } catch (error) {
      //console.log("UPDATE_PROFILE_API API ERROR............", error);
      toast.error("Could Not Update Profile");
    }
    toast.dismiss(toastId);
  };
}

export async function changePassword(token, formData, navigate) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    });
    // console.log("CHANGE_PASSWORD_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Password Changed Successfully");
    navigate("/dashboard/myprofile");
  } catch (error) {
    //console.log("CHANGE_PASSWORD_API API ERROR............", error);
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId);
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Deleting...");
    try {
      const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      });
      // console.log("DELETE_PROFILE_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Profile Deleted Successfully");
      dispatch(logout(navigate));
    } catch (error) {
      //console.log("DELETE_PROFILE_API API ERROR............", error);
      toast.error("Could Not Delete Profile");
    }
    toast.dismiss(toastId);
  };
}
