import React, { useRef } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import Home from "./Home";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

function Login({ closingModel, onLogin }) {
  // const modalRef = useRef();
  // const buttonRef = useRef();
  // const closePage = (e) => {
  //   if (modalRef.current === e.target || buttonRef.current === e.target) {
  //     closingModel();
  //   }
  // };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const handleLoginClick = () => {>
  //   onLogin(); // Call the onLogin function passed as prop
  // };

  return (
    <>
      <div
        // ref={modalRef}
        // onClick={closePage}
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-10"
      >
        <div className="flex flex-col gap-3 text-white">
          <Link to={"/home"} className=" place-self-end mr-3">
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className=" bg-dark-color rounded-xl px-24 py-8 flex flex-col gap-5 items-center mx-4">
            <h1 className=" text-3xl font-semibold mb-5">Login</h1>
            <Button
              className="gap-2 w-full"
              sx={{
                borderRadius: 1,
                border: "1px solid white",
                paddingX: 6,
                paddingY: 1,
                color: "white",
                textTransform: "none",
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Continue with <GoogleIcon fontSize="small" />
              <ArrowForwardIcon fontSize="small" />
            </Button>
            <div className="flex items-center justify-between my-1">
              <div className=" bg-white w-[120px] h-[0.5px]"></div>
              <p className="text-sm px-5">or</p>
              <div className=" bg-white w-[120px] h-[0.5px]"></div>
            </div>
            <form className=" flex flex-col gap-5">
              <div className=" flex flex-col gap-1">
                <h6 className="text-sm font-light">Email</h6>
                <input
                  type="email"
                  placeholder="Enter you email"
                  required
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h6 className="text-sm font-light">Password</h6>
                <Input
                  disableUnderline
                  placeholder="password"
                  sx={{
                    fontSize: 15,
                  }}
                  className="w-full px-3 py-1.5 text-black rounded-md outline-none bg-white"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment className="mr-2">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </div>
              <Link
                to="/forgotPassword"
                className=" font-light place-self-end text-xs underline -mt-3"
              >
                Forgot Password?
              </Link>

              <Button
                // ref={buttonRef}
                variant="contained"
                sx={{
                  backgroundColor: "#07b2a4",
                  marginTop: 2,
                  color: "white",
                  fontWeight: 600,
                  letterSpacing: 1,
                  boxShadow: "none",
                  borderRadius: 1,
                  paddingY: 0.5,
                  fontSize: 15,
                  "&:hover": {
                    backgroundColor: "#07b2a4",
                    color: "white",
                  },
                }}
                className="w-[40%] place-self-center font-medium rounded-md"
                // onClick={handleLoginClick}
              >
                Login
              </Button>
              <div className=" flex flex-col justify-center items-start">
                <p className="text-xs font-normal mt-4">
                  Not a member yet?{" "}
                  <Link
                    to="/signup"
                    className=" text-medium-color text-xs underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Home />
    </>
  );
}

export default Login;
