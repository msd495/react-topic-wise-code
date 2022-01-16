import React ,{Fragment} from "react";

import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/action"
import Button from "@material-ui/core/Button";

const ReduxIncDex = ()=>{

    const myState = useSelector((state)=> {
        console.log(`state is ${JSON.stringify(state.changeTheNumber)}`)
        return state.changeTheNumber
    })
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <p style={{'position':'absolute'}}>{myState}</p>
            <Button variant="outlined" color="primary" onClick={()=>dispatch(incNumber(5))}>Increment</Button>
            <Button variant="outlined" color="secondary" onClick={()=>dispatch(decNumber(5))}>Decrement</Button>
        </React.Fragment>
    )

}

export default ReduxIncDex