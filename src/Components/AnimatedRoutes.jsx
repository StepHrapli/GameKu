import React, { use } from 'react'
import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import LoginForm from './LoginForm/LoginForm';
import MainLink from './MainLink/MainLink';
import MainLink2 from './MainLink2/MainLink2';
import MainScroll from './MainScroll/MainScroll';
import MainSection from './MainSection/MainSection';
import MainSection2 from './MainSection2/Mainsection2';
import MainSection3 from './MainSection3/MainSection3';
import MainSection4 from './MainSection4/MainSection4';
import MainSection5 from './MainSection5/MainSection5';
import MainSection6 from './MainSection6/MainSection6';
import MainSection7 from './MainSection7/MainSection7';
import ProposalMain from './ProposalMain/ProposalMain';
import ProposalNo from './ProposalNo/ProposalNo';
import ProposalQuest from './ProposalQuest/ProposalQuest';
import ProposalYes from './ProposalYes/ProposalYes';

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
  return (
        <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={<LoginForm />}
                    />
                    <Route
                        path="/MainLink"
                        element={<MainLink />}
                    />
                    <Route
                        path="/MainLink2"
                        element={<MainLink2 />}
                    />
                    <Route
                        path="/MainScroll"
                        element={<MainScroll />}
                    />
                    <Route
                        path="/MainSection"
                        element={<MainSection />}
                    />
                    <Route
                        path="/MainSection2"
                        element={<MainSection2 />}
                    />
                    <Route
                        path="/MainSection3"
                        element={<MainSection3 />}
                    />
                    <Route
                        path="/MainSection4"
                        element={<MainSection4 />}
                    />
                    <Route
                        path="/MainSection5"
                        element={<MainSection5 />}
                    />
                    <Route
                        path="/MainSection6"
                        element={<MainSection6 />}
                    />
                    <Route
                        path="/MainSection7"
                        element={<MainSection7 />}
                    />
                    <Route
                        path="/ProposalMain"
                        element={<ProposalMain />}
                    />
                    <Route
                        path="/ProposalNo"
                        element={<ProposalNo />}
                    />
                    <Route
                        path="/ProposalQuest"
                        element={<ProposalQuest />}
                    />
                    <Route
                        path="/ProposalYes"
                        element={<ProposalYes />}
                    />
                    
                </Routes>
                </AnimatePresence>
  )
}

export default AnimatedRoutes