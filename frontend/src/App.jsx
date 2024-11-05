import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import StudentRegForm from "./Admin/StudentRegForm";
import UserRegForm from "./Admin/UserRegForm";
import StudentTable from "./Admin/StudentTable";
import UserTable from "./Admin/UserTable";
import UserLogin from "./Admin/userLogin";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import AcademicForm from "./Admin/AcademicForm";
import AcademicsTable from "./Admin/AcademicsTable";
import Report from "./Admin/Report";
import StudentUpdate from "./Admin/StudentUpdate";
import StudentDelete from "./Admin/StudentDelete";
import UpdateAcademics from "./Admin/UpdateAcademics";
import DeleteAcademics from "./Admin/DeleteAcademics";
import OtpVerify from "./Admin/OtpVerify";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes/>,
      children:[
        {
          path:"",
          element:<Dashboard/>
        },
        {
          path:"studentReg",
          element:<StudentRegForm/>
        },
        {
          path:"userReg",
          element:<UserRegForm/>
        },
        {
          path:"studentTable",
          element:<StudentTable/>
        },
        {
          path:"academics",
          element:<AcademicForm/>
        },
        {
          path:"users",
          element:<UserTable/>
        },
        {
          path:"academicTable",
          element:<AcademicsTable/>
        },
        {
          path:"report",
          element:<Report/>
        },
        {
          path:"studentUpdate/:id",
          element:<StudentUpdate/>
        },
        {
          path:"studentDelete/:id",
          element:<StudentDelete/>
        },
        {
          path:"academicsUpdate/:id",
          element:<UpdateAcademics/>
        },
        {
          path:"deleteAcademics/:id",
          element:<DeleteAcademics/>
        },
        {
          path:"otpVerify",
          element:<OtpVerify/>
        }
       

      ]
    },
    {
      path:"auth",
      element:<UserLogin/>
    }
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
