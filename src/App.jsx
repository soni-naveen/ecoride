import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
import VerifyProfile from "./components/Dashboard/Settings/VerifyProfile";
import ChangePassword from "./components/Dashboard/Settings/ChangePassword";
import PublishRide from "./components/Dashboard/PublishRide/index";
import Inbox from "./components/Dashboard/Inbox";
import YourRides from "./components/Dashboard/YourRides";
import AddStopPoint from "./components/Dashboard/PublishRide/stopPoint";
import SeeRides from "./pages/SeeRides";
import BookRide from "./pages/BookRide";
import Chat from "./pages/Chat";
import StartLoader from "./components/StartLoader";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isFirstLoad = sessionStorage.getItem("firstLoad");

    if (!isFirstLoad) {
      setLoading(true);
      sessionStorage.setItem("firstLoad", "true");
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));
      dispatch(getUserDetails(token, navigate));
    }
  }, []);
  return (
    <>
      {loading ? (
        <div className="grid min-h-screen place-items-center">
          <StartLoader />
        </div>
      ) : (
        <>
          <ScrollToTop />
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
            <Route path="/profile/:profileId" element={<Fullprofile />} />
            <Route path="/search" element={<SeeRides />} />
            <Route path="/bookride/:rideId" element={<BookRide />} />
            <Route path="/verification" element={<Verification />} />

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
              <Route
                path="/dashboard/publishride/addStopPoint"
                element={<AddStopPoint />}
              />
              <Route
                path="/dashboard/updateProfile"
                element={<EditProfile />}
              />
              <Route
                path="/dashboard/verifyProfile"
                element={<VerifyProfile />}
              />
              <Route
                path="/dashboard/updatePhoto"
                element={<ChangeProfilePicture />}
              />
              <Route
                path="/dashboard/changePassword"
                element={<ChangePassword />}
              />
              <Route path="/dashboard/inbox" element={<Inbox />} />
              <Route path="/dashboard/yourRides" element={<YourRides />} />
              <Route path="/chat/:driverId/:passengerId" element={<Chat />} />
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
