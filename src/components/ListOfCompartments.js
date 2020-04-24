import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import { list } from '../data/testcompartments';


const Compartment = ({id, name}) => {
    return <li><Link to={`/compartment/${id}`}>{name}</Link></li>
}

export const ListOfCompartments = () => {
    const [compartments, setCompartments] = useState([])
    const onlyCompartment = useState(false)

    useEffect(() => {
        setCompartments(list)
    }, [onlyCompartment])

    return (
        <>
            <ul>
                {compartments.map(compartment => <Compartment key={compartment.id} id={compartment.id} name={compartment.name}/>)}
            </ul>
        </>
    )
}