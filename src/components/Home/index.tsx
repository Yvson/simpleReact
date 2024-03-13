// React
import { Outlet, useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "12px"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px"}}>
                <button
                    style={{ background: "#87255B", color: "white" }}
                    onClick={() => navigate("/service")}
                >
                    Go to Service Page
                </button>
                <button
                    style={{ background: "#87255B", color: "white" }}
                    onClick={() => navigate("offering")}
                >
                    Go to Offering Page
                </button>
            </div>
            
            <h1>Home Outlet abaixo:</h1>
            
            <Outlet />
        </div>
    );
}

export default Home;