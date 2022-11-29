import DashboardNavigationBar from "../components/AdminDashboard/DashboardNavigationBar";
import RecordList from "../components/AdminDashboard/RecordList";
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