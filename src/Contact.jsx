import React from "react";
import { useParams,useLocation,useHistory } from "react-router-dom"
//react router

function Contact(props){
    console.log("params are ",useParams())
    const {fname,lname} = useParams();//written in curly bracket to accept multiple params
    const location = useLocation();
    const history = useHistory()
    console.log(`location is ${JSON.stringify(location)},-----lname is ${lname}`)
    return (
        <h1>In {props.name} Page with param {fname} {lname}and full param is {location.pathname}
        {location.pathname==='/contact/xxxx'?<button onClick={()=>{return history.goBack()}}>Home page</button>:null}</h1>
    )
}

export default Contact;