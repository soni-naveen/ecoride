import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import rideReducer from "../slices/rideSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  ride: rideReducer,
});

export default rootReducer;
