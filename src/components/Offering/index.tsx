// React
import { Route, Routes } from "react-router-dom";

// Components
import OfferingHome from "./components/OfferingHome";
import OfferingRequest from "./components/OfferingRequest";

const Offering = () => {

    return (
        <Routes>
            <Route path="" element={ <OfferingHome /> }>
                <Route path=":offeringId" element={ <OfferingHome /> } />
                <Route path="request" element={ <OfferingRequest /> } />
            </Route>
        </Routes>
    );
}

export default Offering;