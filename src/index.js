import React from 'react';
//when we install react , babel comes with it..Babel makes sure we can write modern javascript ,
//and it compiles it in format so that browser can understand.
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from "./Heading";
import ImageGallery from "./ImageGallery";
import Greetings from "./Greetings";
import {courseName,course1,course2} from "./variables"

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

const showGreetings = true;



function NoGreeting(){
    return (
        <span>No Greetings available</span>
    )
}

ReactDOM.render(
    <React.Fragment>
        <Heading/>
        <Heading value="Image Gallery"/>
        <ImageGallery image1Val="https://picsum.photos/200/300"/>
        {showGreetings===false ?<NoGreeting/>:<Greetings/>}
        <div>
            <p>{`courses are ${courseName} and ${course1} and ${course2}`}</p>
        </div>
    </React.Fragment>,
  document.getElementById('root')
);
//babel compiles these lines and  converts to browser readable code. go to babeljs.io and check it.

reportWebVitals();
