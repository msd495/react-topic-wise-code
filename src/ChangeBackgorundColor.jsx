import React, {useRef, useState} from "react";

function ChangeBackgroundColor(){
    const boxRef = useRef();
    const [count,setCount] = useState(0)
    const countRef = useRef(0);

    const incrementCount=()=>{
        countRef.current+=1
        setCount(countRef.current)
        console.log("count ref is ",countRef)
    }
    const changeColor = ()=>{
        boxRef.current.style.backgroundColor="green"
    }
    return (
        <div>
            <div ref={boxRef} style={{width:"300px",height:"300px",backgroundColor:"red"}}/>
            <p>Count is :{count}</p>
            <button onClick={incrementCount}>Increment Me</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )


}

export default ChangeBackgroundColor;