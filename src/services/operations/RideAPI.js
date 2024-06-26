import { toast } from "react-hot-toast";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { rideEndpoints } from "../apis";
import { setPublishRideData, setLoading } from "../../slices/rideSlice";

const {
  CREATE_RIDE_API,
  DELETE_RIDE_API,
  AUTO_DELETE_RIDE_API,
  GET_SEARCHED_RIDES_API,
  GET_RIDE_DETAIL_API,
  GET_BOOKED_RIDE_API,
  SEND_BOOK_REQUEST_API,
  CANCEL_BOOKED_RIDE_API,
  CONFIRM_BOOKING_API,
  CANCEL_CONFIRMED_BOOKING_API,
  CANCEL_PENDING_BOOKING_API,
} = rideEndpoints;

// create ride
export function createRide(publishRideData, stopPointData, token, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "POST",
        CREATE_RIDE_API,
        { publishRideData, stopPointData },
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      // console.log("CREATE RIDE API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error("Could Not Add Ride Details");
      }
      dispatch(setPublishRideData(null));
      dispatch(setUser({ ...response.data.data }));
      toast.success("Ride Published Successfully");
      navigate("/dashboard/yourRides?type=published");
    } catch (error) {
      // console.log("CREATE RIDE API ERROR............", error);
      toast.error(error.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

//delete ride
export function deleteRide(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Deleting...");
    try {
      const response = await apiConnector("PUT", DELETE_RIDE_API, null, {
        Authorization: `Bearer ${token}`,
      });
      // console.log("DELETE_RIDE_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.updatedRideDetails }));
      toast.success("Ride Deleted Successfully");
      navigate("/dashboard/yourRides?type=published");
    } catch (error) {
      // console.log("DELETE_RIDE_API API ERROR............", error);
      toast.error(error.message);
    }
    toast.dismiss(toastId);
  };
}

//cancel booked ride
export const cancelBookedRide = async (token, rideId, navigate) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "PUT",
      CANCEL_BOOKED_RIDE_API,
      { rideId },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    // console.log("CANCEL_BOOKED_RIDE_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    setTimeout(() => {
      navigate(0);
    }, 1000);
    toast.success("Ride Cancelled Successfully");
  } catch (error) {
    // console.log("CANCEL_BOOKED_RIDE_API API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
};

//automatically delete ride
export function autoDeleteRide(token) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("PUT", AUTO_DELETE_RIDE_API, null, {
        Authorization: `Bearer ${token}`,
      });
      // console.log("AUTO_DELETE_RIDE API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.updatedRideDetails }));
    } catch (error) {
      console.log("AUTO_DELETE_RIDE_API API ERROR............", error);
    }
  };
}

//send request to book ride
export function sendBookRequest(token, rideId) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        SEND_BOOK_REQUEST_API,
        { rideId },
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      // console.log("SEND_BOOK_REQUEST_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error("Could Not Send booking request");
      }
      dispatch(setUser({ ...response.data.updatedUserDetails }));
    } catch (error) {
      console.log("SEND_BOOK_REQUEST_API API ERROR............", error);
    }
    dispatch(setLoading(false));
  };
}

//confirm the passenger booking
export const confirmBooking = async (token, passId) => {
  let result = null;
  try {
    const response = await apiConnector(
      "POST",
      CONFIRM_BOOKING_API,
      { passId },
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );
    // console.log("CONFIRMED_BOOKING_API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error("Failed to confirm booking request");
    }
    result = response.data;
  } catch (error) {
    console.log("CONFIRMED_BOOKING_API ERROR............", error);
    result = error.response.data;
  }
  return result;
};

// //cancel the confirmed passenger booking
// export function cancelConfirmedBooking(token) {
//   return async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//     } catch (error) {}
//     dispatch(setLoading(false));
//   };
// }

// //cancel the pending passenger booking
// export function cancelPendingBooking(token) {
//   return async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//     } catch (error) {}
//     dispatch(setLoading(false));
//   };
// }

//get all searched rides
export const getSearchedRides = async (st, dt, date, seats) => {
  let result = null;
  try {
    const response = await apiConnector("POST", GET_SEARCHED_RIDES_API, {
      st,
      dt,
      date,
      seats,
    });
    // console.log("GET_SEARCHED_RIDES_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    // console.log("GET_SEARCHED_RIDES_API API ERROR............", error);
    result = error.response.data;
  }
  return result;
};

//get ride details
export const getRideDetails = async (rideId) => {
  let result = null;
  try {
    const response = await apiConnector("POST", GET_RIDE_DETAIL_API, {
      rideId,
    });
    // console.log("GET_RIDE_DETAIL_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    // console.log("GET_RIDE_DETAIL_API API ERROR............", error);
    result = error.response.data;
  }
  return result;
};

//get booked ride details
export const getBookedRideDetails = async (bookedRideId) => {
  let result = null;
  try {
    const response = await apiConnector("POST", GET_BOOKED_RIDE_API, {
      bookedRideId,
    });
    // console.log("GET_BOOKED_RIDE_API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    // console.log("GET_BOOKED_RIDE_API ERROR............", error);
    result = error.response.data;
  }
  return result;
};
