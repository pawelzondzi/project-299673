import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import { list } from '../data/testwines';


const Wine = ({id, name, year, price}) => {
    return <li><Link to={`/wine/${id}`}>{name}</Link></li>
}

export const ListOfWines = () => {
    const [wines, setWines] = useState([])
    const onlyWine = useState(false)

    useEffect(() => {
        setWines(list)
    }, [onlyWine])

    return (
        <>
            <ul>
                {wines.map(wine => <Wine key={wine.id} id={wine.id} name={wine.name} year={wine.year} price={wine.price}/>)}
            </ul>
        </>
    )
}