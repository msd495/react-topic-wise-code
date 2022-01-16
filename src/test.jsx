import React, {useEffect, useState} from "react"


function SubmitTheForm() {
    const [flname,setFllane]=useState("");
    const [lsname,setlslane]=useState("");

    const updateFlname = (event)=>{
        setFllane(event.target.value)
    }

    const updatelsname = (event)=>{
        setlslane(event.target.value)
    }

    const submitForm = ()=>{
        //over here we have to do api call
        return flname+" "+lsname
    }

    return (
        <>
        <input type="text" name="fname" val={flname} onChange={updateFlname}/>
        <input type="text" name="lname" val={lsname} onChange={updatelsname}/>
        <button onClick={submitForm}/>
        </>
    )

}

export default SubmitTheForm;



