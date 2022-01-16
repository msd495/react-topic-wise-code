import React from "react";

const Sresult = (props)=>{
    //props={val:"abc"}
    const img = `https://source.unsplash.com/600x400/?${props.val}`
    return(
        <>
            <div>
                <img src={img} alt="search"/>
            </div>
        </>
    )
}

export default Sresult;