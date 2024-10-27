import { Navigate, Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";

function ProtectedRoutes() {
  let user = localStorage.getItem('username')

  if (!user) {
    return <Navigate to={"/auth"} />;
  }
  return (
    <>
    <AdminNav/>
      <Outlet />
    </>
  );
}

export default ProtectedRoutes;