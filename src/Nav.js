import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carts from "./Carts"
import Home from "./Home";

import { faShoppingCart, faRegistered} from '@fortawesome/free-solid-svg-icons';
function Nav(props) {
    return (
        <div>
            <Router>
                <div className="bar">
                    <h1 className="shoppingTitle">
                        <a href="/">
                            Shop 2 <FontAwesomeIcon icon={faRegistered}/> eact
                        </a>
                    </h1>
                    <div-right>
                        <a href="/cart">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </a>
                        <div>
                            <p style={{color: 'white', fontSize: '12px'}}>Total: 100 items</p>
                        </div>
                    </div-right>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cart" element={<Carts/>} />
                </Routes>

            </Router>
        </div>
    );
}

export default Nav;
