import React from 'react';

//This file should be in capital letter.
const heading = {
    color:'#fa9191',
    textAlign : 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    fontFamily: "'Noto Sans JP', sans-serif"
}
//props meaning property.. It is used to create custom attribute for components.
function Heading(props) {
    console.log("props is ",props)
    return <div className="heading" style = {heading}>
        <h1>{props.value}</h1>
    </div>
}

export default Heading
