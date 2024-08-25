import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from "./components/Nav";
//Router
import { Route, Routes, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';
import Volunteer from './pages/Volunteer';
import MassActions from "./pages/MassActions";
import Winners from "./pages/Winners";
import ScrollButton from "./components/Button";


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<AboutUs />}>
        </Route>
        <Route path='/work' exact element={<OurWork />}>
        </Route>
        <Route path="/work/volunteer" element={<Volunteer />}>
        </Route>
        <Route path="/work/massactions" element={<MassActions />}>
        </Route>
        <Route path="work/winners" element={<Winners />}>
        </Route>
        <Route path='/contact' element={<ContactUs />}>
        </Route>
      </Routes>
      </AnimatePresence>
      <ScrollButton />
    </div>
  );
}

export default App;
