import React, {useEffect, useState} from 'react'
import {
    useParams
} from "react-router-dom";
import { list } from '../data/testorders';

export const Order = () => {
    const [order, setOrder] = useState({})
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            const order = list[id-1]
            setOrder(order)
        }
    }, [id])

    return (
        <>
            <span>Id: {order.id}</span><br/>
            <span>Title: {order.title}</span><br/>
            <span>Status: {order.status ? 'COMPLETED': 'IN-PROGRESS'}</span><br/>
        </>
    )
}
