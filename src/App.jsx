import { useEffect } from "react";

import "./App.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
// React Router
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import OpenRoute from "./components/Auth/OpenRoute";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import Aboutus from "./pages/Aboutus";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import Settings from "./components/Dashboard/Settings";
import Howitworks from "./pages/Howitworks";
import Helpcenter from "./pages/Helpcenter";
import Ourteam from "./pages/Ourteam";
import Completeprofile from "./pages/Completeprofile";
import { getUserDetails } from "./services/operations/ProfileAPI";
import Searchride from "./pages/Searchride";
import Home from "./pages/Home";
import Header from "./components/Navbar/Header";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Error from "./pages/Error";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));
      dispatch(getUserDetails(token, navigate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route path="verification" element={<Verification />} />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="completeprofile" element={<Completeprofile />} />
          <Route path="dashboard/myprofile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          {/* <Route path="dashboard/publishedride" element={<PublishedRide />} /> */}
          {/* <Route path="dashboard/bookedride" element={<BookedRide />} /> */}
          {/* <Route path="dashboard/inbox" element={<Inbox />} /> */}
          {/* <Route path="dashboard/ratingsgiven" element={<RatingsGiven />} /> */}
          {/* <Route
              path="dashboard/ratingsreceived"
              element={<RatingsReceived />}
            /> */}
        </Route>

        <Route path="aboutus" element={<Aboutus />} />
        <Route path="howitworks" element={<Howitworks />} />
        <Route path="helpcenter" element={<Helpcenter />} />
        <Route path="ourteam" element={<Ourteam />} />
        <Route path="searchride" element={<Searchride />} />
        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
