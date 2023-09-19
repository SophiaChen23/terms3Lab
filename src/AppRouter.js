// AppRouter.js
import React from 'react';
import { Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import App from "./App";
import Cart from "./Cart";
// import About from './About';
// import Contact from './Contact';
//router under nerf deal with data.................. not js file
//data.json -> app.js ->nerf.js () -> cart.js(props) map-id(>0)
// nerf pass each quantity (>0) and all quantity as props to the carts
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/home' element={<App/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>

        </Router>


    );
};

export default AppRouter;
