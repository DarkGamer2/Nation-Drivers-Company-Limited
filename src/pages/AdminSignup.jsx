import AdminSignupForm from "../components/AdminSignupForm";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const AdminSignup=()=>{

  return(
    <div>
    <NavigationBar/>
    <h1>CREATE YOUR ADMINISTRATOR ACCOUNT</h1>
    <AdminSignupForm/>
    {/* <Footer/> */}
   </div>
  )
}

export default AdminSignup;