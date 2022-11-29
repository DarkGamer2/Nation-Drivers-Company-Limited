import NavigationBar from "../components/NavigationBar";
import AdminLoginForm from "../components/AdminLoginForm";
import "../styles/adminPage.css"
const AdminLogin=()=>{
    return(
        <div>
            <NavigationBar/>
            <h1>ADMINISTRATOR LOGIN</h1>
            <AdminLoginForm/>
        </div>
    )
}

export default AdminLogin;