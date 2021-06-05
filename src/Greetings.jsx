import React from 'react';

const cssStyle = {}
let curDate = new Date()
curDate = curDate.getHours()
let greetings = '';
/* if condition in react js*/
if (curDate >= 1 && curDate < 12){
    greetings = 'Good Morning'
    cssStyle.color = 'green'
}else if (curDate >= 12 && curDate <19){
    greetings = 'Good Afternoon'
    cssStyle.color = 'blue'
}else{
    greetings = 'Good Night'
    cssStyle.color = 'yellow'
}

function Greetings() {
    return (
        <div>
            <h2 style={cssStyle}>Hello Everyone {greetings}</h2>
        </div>
    )
}

export default Greetings;