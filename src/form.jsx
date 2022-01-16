import React,{useState} from 'react';
import Input from "@material-ui/core/Input"; //npm install @material-ui/core
import Button from "@material-ui/core/Button";

/*i).Create Form.jsx
2).create a component /function
3).export that componet
4).Inside component return some html
5).Import that component in App.js*/

//This are known as controlled component, as component controls the html elements.
const input={
    margin:'2px'
}

const Form = ()=>{

    //const [val,setVal] =useState("")

    //const [finalVal,setfinalVal] =useState("")

    const [fullName,setFullName] = useState({
        fname:"",
        lname:"",
    });

    const [finalFullName,finalSetFullName] = useState({
        fname:"",
        lname:"",
    });


    const inputEvent = (event)=>{

        setFullName(function(preval){
                return {
                    ...preval,
                    [event.target.name]:event.target.value,
                };
        })

        console.log(event.target.value)
        /*setVal(function(){
            return event.target.value;
        })*/
    }

    const onSubmit = (e)=>{
        finalSetFullName({
            fname: fullName.fname,
            lname: fullName.lname,
        })
        e.preventDefault();
    }

    /*const submitMe =()=>{
        setfinalVal(()=>{return val})
    }*/
    return (
        <>
            {/*<h1>Hello {finalVal}</h1>
            <input type="text" onChange={inputEvent} value={val}/>
            <button onClick={submitMe}>ClickMe</button>*/}
            <form onSubmit={onSubmit}>
                <h1>Hello {finalFullName.fname} {finalFullName.lname}</h1>
                <Input placeholder="enter first name" onChange={inputEvent} name="fname" value={fullName.fname} inputProps={{ 'aria-label': 'description' }}/>
                <Input placeholder="enter last name" onChange={inputEvent} name="lname" value={fullName.lname} inputProps={{ 'aria-label': 'description' }}/>
                <Button variant="outlined" color="secondary" type="submit" style={{marginTop: '9px'}}>Submit </Button>
            </form>
        </>
    )

}

export default Form