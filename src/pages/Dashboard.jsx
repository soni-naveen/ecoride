import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Loader";

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-100px)] place-items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-full">
      <div className="min-h-full flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] md:w-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
