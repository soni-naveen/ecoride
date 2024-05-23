import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { rideEndpoints } from "../apis";

const { CREATE_RIDE_API, ADD_STOP_POINT_API } = rideEndpoints;

// create ride
export const createRide = async (data, token, navigate) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_RIDE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE RIDE API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Add Ride Details");
    }
    result = response?.data?.data;
    toast.success("Ride Published Successfully");
    // toast.success("Ride Created Add stop points");
    navigate("/home");
  } catch (error) {
    console.log("CREATE RIDE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

//add stop points to ride
// export const addStopPoint = async (data, token, navigate) => {
//   let res = null;
//   const toastId = toast.loading("Loading...");
//   try {
//     const response = await apiConnector("POST", ADD_STOP_POINT_API, data, {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     });
//     console.log("ADD_STOP_POINT_API API RESPONSE............", response);
//     if (!response?.data?.success) {
//       throw new Error("Failed to Add Stop Point");
//     }
//     res = response?.data?.data;
//     toast.success("Ride Published Successfully");
//     navigate("/home");
//   } catch (error) {
//     console.log("ADD_STOP_POINT_API API ERROR............", error);
//     toast.error(error.message);
//   }
//   toast.dismiss(toastId);
//   return res;
// };
