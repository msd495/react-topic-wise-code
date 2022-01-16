import React, {useRef,useState} from 'react';

let json=[{"id":123,"value":"ayush"},{"id":123,"value":"ayush"},{"id":123,"value":"ankit"}]

function ParentComp() {

    const callMe=()=>{
            let uniqueArr=new Set();
            for(let i=0;i<json.length;i++){
                uniqueArr.add(json[i].id);
            }
            //uniqueArr=[123]
            let countMap=new Map();
            for(let j=0;j<json.length;j++){
                if(json[j].id in uniqueArr){
                    countMap.set(json[j].id,countMap.get(json[j].id)+1)
                }else{
                    countMap.set(json[j].id,1)
                }
            }

    }

    return (
        <React.Fragment>
            <button onClick={callMe}/>
        </React.Fragment>
    )
}


export default ParentComp;