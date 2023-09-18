// AppRouter.js
import React from 'react';
import { Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import App from "./App";
import Cart from "./Cart";
// import About from './About';
// import Contact from './Contact';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>

        </Router>


    );
};

export default AppRouter;
