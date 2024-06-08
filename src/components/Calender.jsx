// Calender.js
import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Calender({ register, onValueChange }) {
  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    onValueChange(formattedDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className="w-[10rem] bg-white rounded-[4px] sm2xl:w-[14rem] smxl:w-[16rem]"
        defaultValue={dayjs(new Date())}
        format="DD-MM-YYYY"
        minDate={dayjs(new Date())}
        onChange={(date) => handleDateChange(date)}
        slotProps={{
          openPickerButton: {
            color: "primary",
          },
          inputAdornment: {
            position: "start",
          },
          textField: {
            size: "small",
            ...register("date"),
          },
        }}
      />
    </LocalizationProvider>
  );
}
