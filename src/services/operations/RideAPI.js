import { toast } from "react-hot-toast";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { rideEndpoints } from "../apis";
import { setPublishRideData, setLoading } from "../../slices/rideSlice";

const {
  CREATE_RIDE_API,
  DELETE_RIDE_API,
  GET_SEARCHED_RIDES_API,
  GET_RIDE_DETAIL_API,
} = rideEndpoints;

// create ride
export function createRide(publishRideData, stopPointData, token, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
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
      navigate("/dashboard/yourRides");
    } catch (error) {
      console.log("CREATE RIDE API ERROR............", error);
      toast.error(error.message);
    }
    dispatch(setLoading(false));
  };
}

//add stop points to ride
export function deleteRide(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Deleting...");
    try {
      const response = await apiConnector("PUT", DELETE_RIDE_API, null, {
        Authorization: `Bearer ${token}`,
      });
      // console.log("DELETE_RIDE API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.updatedRideDetails }));
      toast.success("Ride Deleted Successfully");
      navigate("/dashboard/yourRides");
    } catch (error) {
      console.log("DELETE_RIDE_API API ERROR............", error);
      toast.error(error.message);
    }
    toast.dismiss(toastId);
  };
}

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
    console.log("GET_SEARCHED_RIDES_API API ERROR............", error);
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
    console.log("GET_RIDE_DETAIL_API API ERROR............", error);
    result = error.response.data;
  }
  return result;
};
