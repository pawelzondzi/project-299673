import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import { list } from '../data/testorders';


const Order = ({id, title, status}) => {
    const icon = status ? '👍' : '⛔';
    return <li>{icon}<Link to={`/order/${id}`}>{title}</Link></li>
}

export const ListOfOrders = () => {
    const [orders, setOrders] = useState([])
    const onlyOrder = useState(false)

    useEffect(() => {
        setOrders(list)
    }, [onlyOrder])

    return (
        <>
            <ul>
                {orders.map(order => <Order key={order.id} id={order.id} title={order.title} status={order.status}/>)}
            </ul>
        </>
    )
}