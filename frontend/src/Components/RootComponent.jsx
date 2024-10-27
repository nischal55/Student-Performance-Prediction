import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";


function RootComponent() {
    return (
        <>
            <AdminNav/>
            <Outlet/>
        </>
    );
}

export default RootComponent;