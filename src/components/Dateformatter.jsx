import React from "react";
import PropTypes from "prop-types";

const DateFormatter = ({ inputDateString }) => {
  if (!inputDateString) {
    return null; // Handle cases where the date string is not provided
  }

  const date = new Date(inputDateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const outputDateString = `${day} ${month} ${year}`;

  return <span>{outputDateString}</span>;
};

DateFormatter.propTypes = {
  inputDateString: PropTypes.string,
};
// PropTypes.string means that the inputDateString prop must be a string.

export default DateFormatter;

