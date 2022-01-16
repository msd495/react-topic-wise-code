import React,{useState} from "react";

function SingleTextBox(){
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [fullname,setFullName] = useState("")
    const callFname = (event)=>{
        console.log(event.target.value)
        setFname(event.target.value)

    }
    const callName = (event)=>{
        setLname(event.target.value)
    }

    const submitMe = ()=>{
        setFullName(fname+" "+lname)
        setFname("")
        setLname("")
    }

    return (
        <React.Fragment>
            <div>
            <h1>Hello {fullname} </h1>
            <input type="text" name="fname" placeholder="first name" value={fname} onChange={callFname}/>
            <input type="text" name="lname" placeholder="last name" value={lname} onChange={callName}/>
                <button type="button" onClick={submitMe} >Click Me </button>
            </div>
        </React.Fragment>
    )
}

export default SingleTextBox;