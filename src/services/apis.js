//BACKEND BASE URL

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  COMPLETE_PROFILE_API: BASE_URL + "/auth/completeprofile",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_FULL_PROFILE_API: BASE_URL + "/profile/fullprofile/:profileId",
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
};

// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
};

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  COMPLETE_PROFILE_API: BASE_URL + "/profile/completeProfile",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  ABOUT_PROFILE_UPDATE_API: BASE_URL + "/profile/myProfileAbout",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
};
