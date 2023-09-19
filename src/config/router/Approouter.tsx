import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add_Update from "../../pages/Add_upd_card";
import Pro_Card from "../../pages/ProjectScreen";


export default function Approuter() {

    return <>
        <Router>
            <Routes>
                <Route path="/" element={<Pro_Card />} />
                <Route path="add/" element={< Add_Update />} />
                <Route path="add/:id" element={<Add_Update />} />
            </Routes>
        </Router>

    </>
}