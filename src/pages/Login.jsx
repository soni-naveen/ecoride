import React from "react";
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

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-10">
        <div className="flex flex-col gap-3 text-white">
          <Link to={"/home"} className=" place-self-end mr-3">
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className=" bg-dark-color rounded-xl px-24 py-8 flex flex-col gap-5 items-center mx-4">
            <h1 className=" text-3xl font-semibold mb-5">Login</h1>
            <button className="gap-2 flex items-center justify-center w-full rounded-md border border-white px-6 py-2 text-white mb-2">
              Continue with <GoogleIcon fontSize="small" />{" "}
              <ArrowForwardIcon fontSize="small" />
            </button>
            <div className="--or-- flex items-center justify-between my-1">
              <div className=" bg-white w-[120px] h-[0.5px]"></div>
              <p className="text-sm px-5">or</p>
              <div className=" bg-white w-[120px] h-[0.5px]"></div>
            </div>
            <form className="flex flex-col gap-5">
              <div className="email flex flex-col gap-1">
                <h6 className="text-sm font-light">Email</h6>
                <input
                  type="email"
                  placeholder="Enter you email"
                  required
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm"
                />
              </div>
              <div className="password flex flex-col gap-1">
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
              <button className="w-[40%] place-self-center rounded-md bg-medium-color mt-5 py-1.5 text-white shadow-md font-semibold rounded-md">
                <Link to="/verification" className="tracking-[1px]">
                  LOGIN
                </Link>
              </button>
              <div className="gotosignup flex flex-col justify-center items-start">
                <p className="text-xs font-normal mt-4">
                  Not a member yet? &nbsp;
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
