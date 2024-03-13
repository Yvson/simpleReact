// React
import { Outlet, useNavigate } from "react-router-dom";


const OfferingRequest = () => {
    const navigate = useNavigate();

    return (
        <div style={{ border: "1px solid yellow", borderRadius: "20px", padding: "10px", margin: "10px" }}>
            <h1>Offering Request Page</h1>
            <button
                style={{ background: "#87255B", color: "white" }}
                onClick={() => navigate("/offering")}
            >
                Go to Offering Page
            </button>

            <Outlet />
        </div>
    );
}

export default OfferingRequest;