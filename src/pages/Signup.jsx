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
import GoogleIcon from "@mui/icons-material/Google";

const Signup = (props) => {
  // const closeModel = props.closeModel;
  // console.log(props);
  // const modalRef = useRef();
  // const buttonRef = useRef();
  // const closePage = (e) => {
  //   if (modalRef.current === e.target || buttonRef.current === e.target) {
  //     closeModel();
  //   }
  // };
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            <h1 className=" text-3xl font-semibold mb-5">Sign Up</h1>
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
              Continue with <GoogleIcon fontSize="small" />{" "}
              <ArrowForwardIcon fontSize="small" />
            </Button>
            <div className="flex items-center justify-between my-1">
              <div className=" bg-white w-[120px] h-[0.5px]"></div>
              <p className="text-sm px-5">or</p>
              <div className=" bg-white w-[120px] h-[0.5px]"></div>
            </div>
            <form className=" flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-light">Email</h6>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-light">Password</h6>
                <Input
                  disableUnderline
                  placeholder="password"
                  sx={{
                    fontSize: 15,
                  }}
                  className="w-full px-3 py-1.5 text-black rounded-md outline-none bg-white"
                  type={showPassword1 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment className="mr-2">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword1 ? (
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
              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-light">Confirm password</h6>
                <Input
                  disableUnderline
                  placeholder="confirm password"
                  sx={{
                    fontSize: 15,
                  }}
                  className="w-full px-3 py-1.5 text-black rounded-md outline-none bg-white"
                  type={showPassword2 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment className="mr-2">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword2 ? (
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
              <Link to="/verification" className="text-center">
                <Button
                  className="w-[40%] place-self-center rounded-md"
                  // ref={buttonRef}
                  variant="contained"
                  sx={{
                    backgroundColor: "#07b2a4",
                    marginTop: 3,
                    paddingY: 0.5,
                    color: "white",
                    boxShadow: 'none',
                    fontWeight: 600,
                    letterSpacing: 1,
                    borderRadius: 1,
                    fontSize: 15,
                    "&:hover": {
                      backgroundColor: "#07b2a4",
                      color: "white",
                    },
                  }}
                  // onClick={closePage}
                >
                  Signup
                </Button>
              </Link>
              <div className="flex flex-col justify-center items-start">
                <p className="text-xs font-normal mt-4">
                  Already a member?
                  <Link
                    to="/login"
                    className=" text-medium-color text-xs underline"
                  >
                    Login
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
};
export default Signup;
