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
import MyProfile from "./components/Dashboard/MyProfile";
import Howitworks from "./pages/Howitworks";
import Helpcenter from "./pages/Helpcenter";
import Ourteam from "./pages/Ourteam";
import Completeprofile from "./pages/Completeprofile";
import { getUserDetails } from "./services/operations/ProfileAPI";
import Searchride from "./pages/Searchride";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Navbar/Header";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Error from "./pages/Error";
import Fullprofile from "./pages/Fullprofile";
import EditProfile from "./components/Dashboard/Settings/EditProfile";
import ChangeProfilePicture from "./components/Dashboard/Settings/ChangeProfilePicture";
import ChangePassword from "./components/Dashboard/Settings/ChangePassword";
import PublishRide from "./components/Dashboard/PublishRide";
import SeeRides from "./pages/SeeRides";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/searchride" element={<Searchride />} />
        <Route path="/fullprofile/:profileId" element={<Fullprofile />} />
        <Route path="/seeRides" element={<SeeRides />} />

        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route path="/verification" element={<Verification />} />
        <Route
          path="/update-password/:id"
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
          <Route path="/completeprofile" element={<Completeprofile />} />
          <Route path="/dashboard/myprofile" element={<MyProfile />} />
          <Route path="/dashboard/publishride" element={<PublishRide />} />
          <Route path="/dashboard/updateProfile" element={<EditProfile />} />
          <Route
            path="/dashboard/updatePhoto"
            element={<ChangeProfilePicture />}
          />
          <Route
            path="/dashboard/changePassword"
            element={<ChangePassword />}
          />

          {/* <Route path="dashboard/bookedride" element={<BookedRide />} /> */}
          {/* <Route path="dashboard/inbox" element={<Inbox />} /> */}
          {/* <Route path="dashboard/ratingsgiven" element={<RatingsGiven />} /> */}
          {/* <Route
              path="dashboard/ratingsreceived"
              element={<RatingsReceived />}
            /> */}
        </Route>
        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
