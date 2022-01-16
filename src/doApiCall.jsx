import React,{useState,useEffect,useRef} from "react";

function DoApiCallDelay() {
    const [val,setVal] = useState("")
    //debouncing concept in javascript
    useEffect(()=>{
        let timer;
        if (val.length>3){
            timer = setTimeout(()=>
            {
                console.log("do api call");
            },3000)
        }
            return ()=>{
                console.log("clearing it",timer)
                clearTimeout(timer);} //unmounting it
        },[val])

    const callMe = (e)=>{
        //console.log("length of val is ",e.target.value);
        setVal(e.target.value)
    }

    return (
        <React.Fragment>
            <input type="text" value={val} onChange={callMe}/>
        </React.Fragment>
    )

}

export default DoApiCallDelay