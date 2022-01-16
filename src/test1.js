import React, {useEffect, useState} from "react";

function CreateTimer(){

    const [time,setTime] = useState({minute:5,seconds:0,totalSec:300});
    const [isActive,setIsActive] = useState(false);

    useEffect(()=>{
        let timer,min,sec;
        if(isActive){
            timer=setInterval(()=>{
                min=Math.floor((time.totalSec-1)/60);
                sec=(time.totalSec-1)%60;
                setTime({...time,minute:min,seconds:sec,totalSec: time.totalSec-1})
            },1000)
        }
        return ()=>{clearInterval(timer);}
    },[time,isActive])

    const toggle=()=>{
        setIsActive(!isActive)

    }

    return (
        <React.Fragment>
            <p>{time.minute}:{time.seconds}</p>
            <input type="text" val={time} placeholder="enter in mins"/>
            <button onClick={toggle}>{isActive?'Pause':'Start'}</button>
        </React.Fragment>
    )
}

export default CreateTimer;


