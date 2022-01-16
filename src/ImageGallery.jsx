import React from 'react';
import movieArr from './variables'
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
    //implement pagination logic over here
    //movieArr will get items from prev=0 to curr=(curr + itemPerPage) to current page
    //on click of next button prev will be currPage and current page will become  (current page+itemPerPage)
    return (
    <div className = "image_div">
        {movieArr.map(nData)}
    </div>)

}

export default ImageGallery