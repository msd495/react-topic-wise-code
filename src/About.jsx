import React from "react";
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";

/*
difference between component and render method.

Ans).when we use component it uses React.createElement internally, and creates a new element.
however when we use render it just updates the existing components.

 */

function X1() {
    return (
        <h1>In x1</h1>
    )
}

function X2(){
    return (
        <h1>In x2</h1>
    )
}

function About(){
    return (

        <BrowserRouter>
            <Switch>
                <Route path='/'  exact component={()=> {return <h1>Heloo</h1> }}/>
                <Route path='/about/x1' component={X1}/>
                <Route path='/about/x2' component={X2}/>
                <Redirect from="/about/error" to="/about/x1" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default About;