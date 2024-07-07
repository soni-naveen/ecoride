//BACKEND BASE URL
const BASE_URL = `${import.meta.env.VITE_REACT_BASE_URL}/api/v1`;

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
  FULL_PROFILE_API: BASE_URL + "/profile/fullProfile",
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_INBOX_MESSAGES_API: BASE_URL + "/profile/getInboxMessages",
  DELETE_INBOX_MESSAGE_API: BASE_URL + "/profile/deleteInboxMessage",
};

// RIDE ENDPOINTS
export const rideEndpoints = {
  CREATE_RIDE_API: BASE_URL + "/ride/createRide",
  DELETE_RIDE_API: BASE_URL + "/ride/deleteRide",
  AUTO_DELETE_RIDE_API: BASE_URL + "/ride/autoDeleteRide",
  GET_SEARCHED_RIDES_API: BASE_URL + "/ride/getSearchedRides",
  GET_RIDE_DETAIL_API: BASE_URL + "/ride/getRideDetails",
  GET_BOOKED_RIDE_API: BASE_URL + "/ride/getBookedRideDetails",
  SEND_BOOK_REQUEST_API: BASE_URL + "/ride/sendBookRequest",
  CANCEL_BOOKED_RIDE_API: BASE_URL + "/ride/cancelBookedRide",
  CONFIRM_BOOKING_API: BASE_URL + "/ride/confirmBooking",
  CANCEL_PENDING_BOOKING_API: BASE_URL + "/ride/cancelPendingBooking",
  CANCEL_CONFIRMED_BOOKING_API: BASE_URL + "/ride/cancelConfirmedBooking",
};

// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
};

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  VERIFY_ID_API: BASE_URL + "/profile/verifyProfile",
  COMPLETE_PROFILE_API: BASE_URL + "/profile/completeProfile",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  ABOUT_PROFILE_UPDATE_API: BASE_URL + "/profile/myProfileAbout",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
};
