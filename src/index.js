import React from 'react';
//when we install react , babel comes with it..Babel makes sure we can write modern javascript ,
//and it compiles it in format so that browser can understand.
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//render takes three params 1st). what we have to show 2nd). where we have to show 3rd).  callback function
//to manipulate dom we need ReactDom
//what is jsx?
//whatever html ,we write in javascript, method that is known as jsx(javascript xml)
//instead of using div , better to use react.fragment
//{} is used to write javascript expression inside html.
//template literal is used to concatenate two things
/*
/*    code to try (initially)
        <h1>Hello every one.Welcome to {courseName} class.</h1>,
        <p>{`Here we will learn about ${course1} and ${course2}`}</p>
        <p>{`current date is ${curDate} and curr time is ${curTime}`}</p>

  */


const courseName = "react-node"
const course1= "react"
const course2="node"
const curDate = new Date().toLocaleDateString()
const curTime =  new Date().toLocaleTimeString()
const image1 = "https://picsum.photos/200/300"
const image2 = "https://picsum.photos/200/300"
const image3 = "https://picsum.photos/300/300"
const heading = {
    color:'#fa9191',
    textAlign : 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    fontFamily: "'Noto Sans JP', sans-serif"
}
ReactDOM.render(
    <React.Fragment>
        <div className="heading" style = {heading}>
            <h1>Image Gallery</h1>
        </div>
        <div className = "image_div">
            <a href="https://picsum.photos/">
                <img src={image1} alt="random images"/>
            </a>
            <a href="https://picsum.photos/">
                <img src={image2} alt="random images"/>
            </a>
            <a href="https://picsum.photos/">
                <img src={image3} alt="random images"/>
            </a>
        </div>
    </React.Fragment>,
  document.getElementById('root')
);
//babel compiles these lines and  converts to browser readable code. go to babeljs.io and check it.

reportWebVitals();
