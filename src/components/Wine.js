import React, {useEffect, useState} from 'react'
import {
    useParams
} from "react-router-dom";
import { list } from '../data/testwines';

export const Wine = () => {
    const [wine, setWine] = useState({})
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            const wine = list[id-1]
            setWine(wine)
        }
    }, [id])

    return (
        <>
            <span>Id: {wine.id}</span><br/>
            <span>Name: {wine.name}</span><br/>
            <span>Year: {wine.year}</span><br/>
            <span>Price: {wine.price}</span><br/>
        </>
    )
}
