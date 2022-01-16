import React, {useEffect, useState} from "react";

function CheckInternals(){
    const [state,setState]=useState(0)
    const [dec,setDec] = useState(100)
    useEffect(()=> {
        alert("mounting phase")
        if (state > 10) {
            alert("getting called from useEffect")
        }
        return () => console.log("unmounting me")
    },[state,dec])

    return (
        <React.Fragment>
            {console.log("check when i am getting called")}
            {state} {dec}
            <button type='button' onClick={()=>setState(state+1)}>Click me</button>
            <button type='button' onClick={()=>setDec(dec-1)}>Dec me</button>
        </React.Fragment>
    )

}

export default CheckInternals;