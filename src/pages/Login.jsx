import React, { useRef } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Home from "./Home";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="flex flex-col gap-3 text-white">
          <Link to={"/home"} className=" place-self-end mr-4">
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className=" bg-dark-color rounded-xl px-24 py-8 flex flex-col gap-5 items-center mx-4">
            <h1 className=" text-3xl font-bold mb-3">Login</h1>
            <Button
              className="gap-8"
              sx={{
                borderRadius: 2,
                border: "1px solid white",
                paddingX: 6,
                paddingY: 1,
                color: "white",
                textTransform: "none",
                fontWeight: 400,
              }}
            >
              Continue with Google <ArrowForwardIcon fontSize="small" />
            </Button>
            <div className="flex items-center justify-between my-1">
              <div className=" bg-white w-[120px] h-[0.5px]"></div>
              <p className="text-sm px-5">or</p>
              <div className=" bg-white w-[120px] h-[0.5px]"></div>
            </div>
            <form className=" flex flex-col gap-5">
              <div className=" flex flex-col gap-1">
                <h6 className="text-sm">Email</h6>
                <input
                  type="email"
                  placeholder="email"
                  required
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h6 className="text-sm">Password</h6>
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
                  backgroundColor: "#d7f7f5",
                  marginTop: 2,
                  color: "#2a6171",
                  fontWeight: 600,
                  letterSpacing: 1,
                  fontSize: 15,
                  "&:hover": {
                    backgroundColor: "#d7f7f5",
                    color: "#2a6171",
                  },
                }}
                className="w-1/3 place-self-center font-medium rounded-md"
                // onClick={handleLoginClick}
              >
                Login
              </Button>
              <div className=" flex flex-col justify-center items-start">
                <p className="text-xs font-normal mt-4">
                  Not a member yet?{" "}
                  <Link to="/signup" className=" text-medium-color text-xs">
                    Sign up
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
