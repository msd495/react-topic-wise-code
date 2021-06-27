import React, {useEffect, useState} from 'react';
import MovieArr from './variables';
import useCustomHook from "./useCustomHook";
import axios from "axios";
/*
function Cart(val, index) {

    return(
        <div key={index}>
            <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" src={val.url} alt="image1"/>
                        <h1>{val.title}</h1>
                        <h4>{val.platform}</h4>
                        <span className="minutes">{val.minute}</span>
                        <p className="type">{val.type}</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text">
                            {val.description}
                        </p>
                    </div>
                    <div className="movie_social">
                        <ul>
                            <li><i className="material-icons">share</i></li>
                            <li><i className="material-icons"></i></li>
                            <li><i className="material-icons">chat_bubble</i></li>
                        </ul>
                    </div>
                </div>
                <div className="blur_back bright_back"></div>
            </div>
            <button onClick={IncLike}>ClickMe</button>
        </div>
    )
}
*/

function CartGallery() {
    const [name,setName] = useState("");
    let [items,setItems] = useState(MovieArr);
    const [count,setCount] = useState(0);//used to initialize value
    //useCustomHook(count)
    const IncLike=()=>{
        setCount(count+1)//set count is used to update value of count.
    }
    const callMe=(event)=>{
        setName(event.target.value)
    }
    const inputName = (event)=>{
        console.log(event.target.value)
        setName(event.target.value)
        setItems( [
            {
                "url":"https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
                "title":"Bright",
                "description":"Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
                "minutes":"117 min",
                "type": "Action, Crime, Fantasy",
                "platform":"Amazon"
            }
        ])
    }

    function cart(val, index){
            return(
                <div key={index}>
                    <div className="movie_card" id="bright">
                        <div className="info_section">
                            <div className="movie_header">
                                <img className="locandina" src={val.url} alt="image1"/>
                                <h1>{val.title}</h1>
                                <h4>{val.platform}</h4>
                                <span className="minutes">{val.minute}</span>
                                <p className="type">{val.type}</p>
                            </div>
                            <div className="movie_desc">
                                <p className="text">
                                    {val.description}
                                </p>
                            </div>
                            <div className="movie_social">
                                <ul>
                                    <li><i className="material-icons">share</i></li>
                                    <li><i className="material-icons"></i></li>
                                    <li><i className="material-icons">chat_bubble</i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="blur_back bright_back"></div>
                    </div>
                    <button onClick={IncLike}>ClickMe</button>
                </div>
            )

    }
    return (
        <>
            <h1>searching for {name}</h1>
            <input type="text" value={name} onChange={inputName}/>
            {items.map(cart)}
        </>

    )
}

export default CartGallery;
