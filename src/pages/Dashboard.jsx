import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-70px)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-70px)]">
      <div className="min-h-[calc(100vh-70px)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] md:w-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
