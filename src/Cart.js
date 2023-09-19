import React, { useState, useEffect } from 'react';
import './styles.css'; // You may need to create this file for styling
import jsonData from './data.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus, faShoppingCart, faRegistered} from '@fortawesome/free-solid-svg-icons';// const fs = require('fs');


import "bootstrap/dist/css/bootstrap.min.css";
// const parentDirectoryPath = path.join(__dirname, '..'); // '..' represents the parent directory

import "./styles.css";
function Cart() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        // Set the initial state using imported jsonData
        setData(jsonData);
    }, []);
    const openLightbox = (item) => {
        setLightboxItem(item);
    };
    // Function to close the lightbox
    useEffect(() => {
        // Calculate the total sum of all item values
        const sum = data.reduce((accumulator, item) => accumulator + item.value, 0);
        setTotal(sum);
    }, [data]);

    const minusValue = (id) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id && item.value >0 ? { ...item, value: item.value - 1 } : item
            )
        );
    };
    return (
        <p> you dumb</p>
        // <div className="Home">
        //     <div class = "bar">
        //         <h1 className="shoppingTitle">
        //             <a href="/">
        //                 Shop 2 <FontAwesomeIcon icon={faRegistered} /> eact
        //             </a>
        //         </h1>
        //         <a href="/cart">
        //             <FontAwesomeIcon icon={ faShoppingCart} />
        //         </a>
        //         <div>
        //             <p style={{ color: 'white', fontSize:'12px' }}>Total: {total} items</p>
        //         </div>
        //     </div>
        //     <ul className="self-define">
        //         {data.map((item) => (
        //             <li key = {item.id} >
        //                 <strong style={{ display: 'block' }}>{item.desc}</strong>
        //                 <div className="item-info">
        //                     <img className="product-image"
        //                          src={item.image}
        //                          onClick={() => openLightbox(item)}
        //                     />
        //                     <p> you dumb</p>
        //                     <div className="value-box">
        //                         <span className="value-label">Quantity:</span>
        //                         <span className="value-square">{item.value}</span>
        //                     </div>
        //                 </div>
        //
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    );
}

export default Cart;
