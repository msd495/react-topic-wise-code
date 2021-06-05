import React from 'react';
import {movieArr} from './variables'
import Image from "./Image";



console.log(" arr is ",movieArr);
function nData(val,index) {
    console.log(" val is ",val)
    return (
        <a key={index} href="https://picsum.photos/">
            <Image imgSrc={val.url}/>
        </a>
    )
}

function ImageGallery(){
    return (
    <div className = "image_div">
        {movieArr.map(nData)}
    </div>)

}

export default ImageGallery