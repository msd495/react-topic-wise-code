import React,{useReducer} from "react";
import Button from "@material-ui/core/Button";


const reducer = (countState,action)=>{
    if (action.type === "Increment"){
            return {val:countState.val+1}
    }else{
        return {val:countState.val-1}
    }
}

const IncrementDecrement = ()=>{

    const [countState,dispatch] = useReducer(reducer,{val:0})

    return (
        <>
            <p>{countState.val}</p>
            <div style={{display:'flex',marginBottom:'2vw'}}>
                <Button variant="outlined" color="primary" onClick={()=>dispatch({type:"Increment"})}>Increment</Button>
                <Button variant="outlined" color="secondary" style={{marginLeft:'2vw'}} onClick={()=>dispatch({type:"Decrement"})}>Decrement</Button>
            </div>

        </>
    )

}

export default IncrementDecrement