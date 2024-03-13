// React
import { useNavigate } from "react-router-dom";


const Service = () => {
    const navigate = useNavigate();
    return (
        <div style={{ border: "1px solid yellow", borderRadius: "20px", padding: "10px", margin: "10px" }}>
            <h1>Service Page</h1>
            
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px"}}>
                <button
                    style={{ background: "#11255B", color: "white" }}
                    onClick={() => navigate("/")}
                >
                    Go to Home Page
                </button>
                <button
                    style={{ background: "#87255B", color: "white" }}
                    onClick={() => navigate("/offering")}
                >
                    Go to Offering Page
                </button>
            </div>
        </div>
    );
}

export default Service;