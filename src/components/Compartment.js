import React, {useEffect, useState} from 'react'
import {
    useParams
} from "react-router-dom";
import { list } from '../data/testcompartments';

export const Compartment = () => {
    const [compartment, setCompartment] = useState({})
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            const compartment = list[id-1]
            setCompartment(compartment)
        }
    }, [id])

    return (
        <>
            <span>Id: {compartment.id}</span><br/>
            <span>Name: {compartment.name}</span><br/>
        </>
    )
}
