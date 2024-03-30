import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";
import { Input as BaseInput } from "@mui/base/Input";
import { Box, styled } from "@mui/system";
import Home from "./Home";
import Button from "@mui/material/Button";

function OTP({ separator, length, value, onChange }) {
  const inputRefs = React.useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        event.preventDefault();
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case "Delete":
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });

        break;
      case "Backspace":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (
        inputRefs.current[indexToEnter].value &&
        indexToEnter < currentIndex
      ) {
        indexToEnter += 1;
      } else {
        break;
      }
    }
    onChange((prev) => {
      const otpArray = prev.split("");
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join("");
    });
    if (currentValue !== "") {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes("text/plain")) {
      let pastedText = clipboardData.getData("text/plain");
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (
          inputRefs.current[indexToEnter].value &&
          indexToEnter < currentIndex
        ) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split("");

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? " ";
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <BaseInput
            slots={{
              input: InputElement,
            }}
            aria-label={`Digit ${index + 1} of OTP`}
            slotProps={{
              input: {
                ref: (ele) => {
                  inputRefs.current[index] = ele;
                },
                onKeyDown: (event) => handleKeyDown(event, index),
                onChange: (event) => handleChange(event, index),
                onClick: (event) => handleClick(event, index),
                onPaste: (event) => handlePaste(event, index),
                value: value[index] ?? "",
              },
            }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

OTP.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  separator: PropTypes.node,
  value: PropTypes.string.isRequired,
};

const InputElement = styled("input")(
  `
  width: 45px;
  height: 45px;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 5px 0px;
  border-radius: 3px;
  text-align: center;
  color : black;
  };

  &:hover {
    border-color: #07b2a4;
  }

  &:focus {
    border-color: #07b2a4;
    outline: none;
    box-shadow: none;
  }
`
);

export default function Verification() {
  const [otp, setOtp] = React.useState("");
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-10">
        <div className="flex flex-col gap-3 text-white">
          <Link to={"/home"} className=" place-self-end mr-3">
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className=" bg-dark-color rounded-xl px-7 py-14 flex flex-col gap-5 items-center mx-4">
            <h1 className=" text-xl w-4/5 text-center leading-10 font-normal mb-5 text-white">
              Enter OTP sent to your email for verification !
            </h1>
            <form className="flex flex-col items-center gap-10">
              <Box>
                <OTP
                  separator={<span>&nbsp;&nbsp;&nbsp;</span>}
                  value={otp}
                  onChange={setOtp}
                  length={4}
                />
              </Box>
              {/* <span>Entered value: {otp}</span> */}
              <Button
                className="w-[35%] rounded-md"
                variant="contained"
                sx={{
                  backgroundColor: "#2a6171",
                  border: "1px solid white",
                  boxShadow: "none",
                  marginTop: 1,
                  paddingY: 0.5,
                  color: "white",
                  fontWeight: 400,
                  letterSpacing: 1,
                  borderRadius: 1,
                  fontSize: 15,
                  "&:hover": {
                    border: "1px solid #07b2a4",
                    backgroundColor: "#07b2a4",
                    color: "white",
                    fontWeight: 600,
                  },
                }}
              >
                verify
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Home />
    </>
  );
}
