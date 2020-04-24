import React from 'react'
import {Link} from "react-router-dom";

export const Menu = () => {

    return <ul>
        <li><Link to="/">Compartments</Link></li>
        <li><Link to="/wines">Wines</Link></li>
        <li><Link to="/orders">Orders</Link></li>
    </ul>

}