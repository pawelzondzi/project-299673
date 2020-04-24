import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import {ListOfWines} from "./components/ListOfWines";
import {ListOfCompartments} from "./components/ListOfCompartments";
import {ListOfOrders} from "./components/listOfOrders"
import {Wine} from "./components/Wine";
import {Compartment} from "./components/Compartment";
import {Order} from "./components/Order"
import {Page404} from "./components/404";

export const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <ListOfCompartments/>
                </Route>
                <Route path="/compartment/:id">
                    <Compartment/>
                </Route>
                <Route path="/wine/:id">
                    <Wine/>
                </Route>
                <Route path="/wines">
                    <ListOfWines/>
                </Route>
                <Route path="/orders">
                    <ListOfOrders/>
                </Route>
                <Route path="/order/:id">
                    <Order/>
                </Route>
                <Route component={Page404}/>
            </Switch>
        </>
    )
}