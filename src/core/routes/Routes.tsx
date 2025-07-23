import { Route, Routes } from "react-router-dom";
import { PageMain } from "../page/page";

const RouterContainer = () => {
    return (
        <Routes>
            <Route path='/' element={<PageMain />} />

        </Routes>
    )
}
export default RouterContainer

