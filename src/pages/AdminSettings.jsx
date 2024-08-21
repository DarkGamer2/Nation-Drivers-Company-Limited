import DashboardNavigationBar from "../components/AdminDashboard/DashboardNavigationBar";
import "../styles/adminSettings.css"
const AdminSettings=()=>{

    return(
        <div>
            <DashboardNavigationBar/>
             <div className="title">
                    <h1>Settings</h1>
                </div>
            <section className="about">
                <div className="about-header">
                        <h3>About Software</h3>
                    </div>
                <div className="about-content">
                    <p>Author: Kameer Hosein</p>
                </div>
            </section>
        </div>
        
    )
}

export default AdminSettings;