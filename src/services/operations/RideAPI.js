import { toast } from "react-hot-toast";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { rideEndpoints } from "../apis";

const { CREATE_RIDE_API, ADD_STOP_POINT_API, DELETE_RIDE_API } = rideEndpoints;

// create ride
export function createRide(data, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", CREATE_RIDE_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
      // console.log("CREATE RIDE API RESPONSE............", response);

      if (!response?.data?.success) {
        throw new Error("Could Not Add Ride Details");
      }
      dispatch(setUser({ ...response.data.newRide }));
      navigate("addStopPoint");
    } catch (error) {
      console.log("CREATE RIDE API ERROR............", error);
      toast.error(error.message);
    }
    toast.dismiss(toastId);
  };
}

//add stop points to ride
export function addStopPoint(data, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("PUT", ADD_STOP_POINT_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
      // console.log("ADD_STOP_POINT_API API RESPONSE............", response);

      if (!response?.data?.success) {
        throw new Error("Failed to Add Stop Point");
      }
      dispatch(setUser({ ...response.data.rideStopPoint }));
      toast.success("Ride Published Successfully");
      navigate("/dashboard/yourRides");
    } catch (error) {
      console.log("ADD_STOP_POINT_API API ERROR............", error);
      toast.error(error.message);
    }
    toast.dismiss(toastId);
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

//automatically delete ride
export function deleteRideAutomatically(token) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("PUT", DELETE_RIDE_API, null, {
        Authorization: `Bearer ${token}`,
      });
      // console.log("DELETE_RIDE API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setUser({ ...response.data.updatedRideDetails }));
    } catch (error) {
      console.log("DELETE_RIDE_API API ERROR............", error);
    }
  };
}
