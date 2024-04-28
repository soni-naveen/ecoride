import { useEffect } from "react";

import "./App.css";
// Redux
// import { useDispatch, useSelector } from "react-redux";
// React Router
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import OpenRoute from "./components/Auth/OpenRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import Aboutus from "./pages/Aboutus";
import Howitworks from "./pages/Howitworks";
import Helpcenter from "./pages/Helpcenter";
import Ourteam from "./pages/Ourteam";
import Completeprofile from "./pages/Completeprofile";
import Searchride from "./pages/Searchride";
import Home from "./pages/Home";
import Header from "./components/Navbar/Header";
import Error from "./pages/Error";

function App() {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const { user } = useSelector((state) => state.profile)

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     const token = JSON.parse(localStorage.getItem("token"))
  //     dispatch(getUserDetails(token, navigate))
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
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
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verification"
          element={
            <OpenRoute>
              <Verification />
            </OpenRoute>
          }
        />
        {/* <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        /> */}
        {/* Private Route - for Only Logged in User */}
        {/* <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/myprofile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          <Route path="dashboard/publishedride" element={<PublishedRide />} />
          <Route path="dashboard/bookedride" element={<BookedRide />} />
          <Route path="dashboard/inbox" element={<BookedRide />} />
          <Route path="dashboard/ratingsgiven" element={<RatingsGiven />} />
          <Route
            path="dashboard/ratingsreceived"
            element={<RatingsReceived />}
          />
        </Route> */}

        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/completeprofile" element={<Completeprofile />} />
        <Route path="/searchride" element={<Searchride />} />
        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
