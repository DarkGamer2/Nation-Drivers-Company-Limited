import DashboardNavigationBar from "../components/AdminDashboard/DashboardNavigationBar";
import { Outlet } from "react-router-dom";
const AdminDashboard=()=>{

    return(
        <div>
           <DashboardNavigationBar/>
           <Outlet/>
        </div>
    )
}

export default AdminDashboard;