import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publishRideData: null,
  loading: false,
};

const rideSlice = createSlice({
  name: "ride",
  initialState: initialState,
  reducers: {
    setPublishRideData(state, value) {
      state.publishRideData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});

export const { setPublishRideData, setLoading } = rideSlice.actions;

export default rideSlice.reducer;
