import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { FaListCheck } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slice/userSlice";

function AdminNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_role = localStorage.getItem("role");
  return (
    <>
      <div className="w-full h-[5rem] bg-indigo-950 text-slate-400 text-left text-lg sticky top-0">
        <ul className="ms-4 flex justify-between">
          <div>
            <li className="pt-6 ps-6 ">Logo</li>
          </div>

          <div className="flex me-8">
            <li className="pt-6">
              {user_role=="Admin"?
              <>
              <Link to={`/adminDash`}>
                <FaHome className="inline-flex mx-4" />
                Dashboard
              </Link>
              </>:
              <>
              <Link to={`/`}>
                <FaHome className="inline-flex mx-4" />
                Dashboard
              </Link>
              </>}
              
            </li>
            {user_role == "Admin" ? (
              <>
                <li className="pt-6">
                  <Link to={`/users`}>
                    <FaUsers className="inline-flex mx-4" />
                    Users
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {user_role != "Admin" ? (
              <>
                <li className="pt-6">
                  <Link to={`/studentTable`}>
                    <PiStudentFill className="inline-flex mx-4" />
                    Students
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {user_role != "Admin" ? (
              <>
                <li className="pt-6">
                  <Link to={`/academicTable`}>
                    <FaListCheck className="inline-flex mx-4" />
                    Academics
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {user_role != "Admin" ? (
              <>
                <li className="pt-6">
                  <Link to={`/report`}>
                    <TbReportAnalytics className="inline-flex mx-4" />
                    Results
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {user_role != "Admin" ? (
              <>
                <li className="pt-6">
                  <Link to={`/feedback`}>
                    <TbReportAnalytics className="inline-flex mx-4" />
                    Feedback
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            
            <li className="pt-6">
              <Link
                onClick={() => {
                  dispatch(logout());
                  navigate("/auth");
                }}
              >
                <LuLogOut className="inline-flex mx-4 text-xl ms-8" />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default AdminNav;
