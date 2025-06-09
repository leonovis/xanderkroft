import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import AboutPage from "./pages/innerPages/About";
import ContactPage from "./pages/innerPages/Contact";
import FaqPage from "./pages/innerPages/Faq";
import NotFoundPage from "./pages/innerPages/NotFound";
import TeamDetailsPage from "./pages/innerPages/TeamDetails";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/contact' element={<ContactPage />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>
                <Route path='/team-details/:id' element={<TeamDetailsPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;