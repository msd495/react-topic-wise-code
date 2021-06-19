import React,{useState,createContext,useEffect} from 'react';
//when we install react , babel comes with it..Babel makes sure we can write modern javascript ,
//and it compiles it in format so that browser can understand.
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./search";
import Form from "./form";
import Todo from "./Todo";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error"
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import Heading from "./Heading";
// import ImageGallery from "./ImageGallery";
// import {courseName,course1,course2} from "./variables"
import CartGallery from './cart';
import CompA from "./CompA";
import axios from "axios";

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

// const showGreetings = false;



// function NoGreeting(){
//     return (
//         <span>No Greetings available</span>
//     )
// }


const Like = ()=>{
    const [count,setCount] = useState(0);//used to initialize value

    useEffect(()=>{
        alert("I am clicked");
        document.title=`you clicked me ${count} times`
    },[count])

    const IncLike=()=>{
        setCount(count+1)//set count is used to update value of count.
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncLike}>ClickMe</button>
        </>
    )
}

function DropdownSelect(){
    const [num,setNum] = useState(5);
    const [name,setName] = useState("");
    const [moves,setMoves] = useState("");
    useEffect(()=>{
        alert(`you choose ${num}`);
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(" res is ",res)
            setName(res.data.name)
            setMoves(res.data.moves.length)
        }
        getData();
    },[num])

    function setPokemonState(event){
        setNum(event.target.value)
       /* async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(" res is ",res)
            setName(res.data.name)
            setMoves(res.data.moves.length)
        }
        getData();*/
    }

    return (
        <>
            <h1>you choose {num}</h1>
            <h1>My name is {name}</h1>
            <h1>I have {moves} moves</h1>
            <select value={num} onChange={setPokemonState}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

const FirstName = createContext();
const LastName = createContext();

ReactDOM.render(
    <React.Fragment>
        <FirstName.Provider value={"ayush"}>
            <LastName.Provider value={"kumar"}>
                <CompA/>
            </LastName.Provider>
        </FirstName.Provider>
        <Todo/>
        <Form/>
        {/*<Search/>*/}
        <Like/>
        <DropdownSelect/>
        {/* <Heading/>
        <Heading value="Image Gallery"/>
        <ImageGallery image1Val="https://picsum.photos/200/300"/>
        {showGreetings===false ?<NoGreeting/>:''}
        <div>
            <p>{`courses are ${courseName} and ${course1} and ${course2}`}</p>
        </div> */}
        <BrowserRouter>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/home' component={About}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
        <CartGallery/>

    </React.Fragment>,
    document.getElementById('root')
);
//babel compiles these lines and  converts to browser readable code. go to babeljs.io and check it.

reportWebVitals();
export {FirstName,LastName}
