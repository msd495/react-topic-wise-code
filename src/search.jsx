import React,{useState} from 'react';
import Sresult from "./sresult";

//to search in all object fields
/*
    arr.filter((obj)=>{
    vals=Object.values(obj);
    var found=vals.find(function(val){
            return val.toString().indexOf('ayu')>-1
    })
    return found!==undefined?obj:undefined;
});
 */

/*


 */

const Search = ()=>{

    const [name,setName] = useState("");

    const inputName = (event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }

    return (
        <>
            <h1>searching for {name}</h1>
            <input type="text" onChange={inputName}  value={name} />
            <br/>
            {name!==""?<Sresult val={name}/>:null}

       </>
    )

}

export default Search