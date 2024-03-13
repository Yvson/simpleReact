// React
import { Outlet, useNavigate, useParams } from "react-router-dom";


const OfferingHome = () => {
    const { offeringId } = useParams();
    const navigate = useNavigate();

    return (
        <div style={{ border: "1px solid yellow", borderRadius: "20px", padding: "10px", margin: "10px" }}>
            <h1>Offering Home Page</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px"}}>
                <button
                    style={{ background: "#11255B", color: "white" }}
                    onClick={() => navigate("/")}
                >
                    Go to Home Page
                </button>
                <button
                    style={{ background: "#87255B", color: "white" }}
                    onClick={() => navigate("/offering/request")}
                >
                    Go to Offering Request Page
                </button>                
            </div>

            <div style={{ padding: "20px" }}>
                {offeringId && `OfferingId: ${offeringId}`}
            </div>

            <Outlet />
        </div>
    );
}

export default OfferingHome;