import React,{useState,createContext,useEffect} from 'react';
//when we install react , babel comes with it..Babel makes sure we can write modern javascript ,
//and it compiles it in format so that browser can understand.
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./search";
import TrafficSignal from "./traffi-sgnal";
import Form from "./form";
import Todo from "./Todo";
import SingleTextBox from "./SingleTextBox";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error"
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {NavLink} from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import think from './cipyThink.jpg';
import useCustomHook from "./useCustomHook";
import IncrementDecrement from "./IncrementDecrement";
import Game from "./Game";
import store from "./store";
import { Provider } from "react-redux";
import ReduxIncDex from "./ReduxIncDex";
import Heading from "./Heading";
 import ImageGallery from "./ImageGallery";
import {courseName,course1,course2} from "./variables"
import CartGallery from './cart';
import CompA from "./CompA";
import axios from "axios";
import Button from '@material-ui/core/Button';
import TagInput from "./TagInput";
import PasswordRevealer from "./PasswordRevealer";
import MultiselectCheckbox from "./Multiselect-form";
import DoApiCallDelay from "./doApiCall";
import Timer from "./Timer";
import CheckInternals from "./checkInternals";
import Throttle from "./Throttling";
import PubSub from "./pubsub";
import UnderstandContext from "./UnderstandContext";
import ThemeContext from "./ThemeContext";
import AppMemo from "./Understandmemo";
import ChangeBackgroundColor from "./ChangeBackgorundColor";
import CreateTimer from "./test1";
import ParentComp from "./refs";

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

store.subscribe(()=>{
    console.log(store.getState())
});

const Like = ()=>{
    const [count,setCount] = useState(0);//used to initialize value
    //useCustomHook(count)
    const IncLike=()=>{
        setCount(count+1)//set count is used to update value of count.
    }

    return (
        <>
            <h1>{count}</h1>
            <Button variant="outlined" color="primary" onClick={IncLike} style={{marginBottom: '9px'}}>ClickMe</Button>
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
            <div className="heading" style = {{
                color:'#5e6aab',
                textAlign : 'center',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                textShadow: '0px 2px 4px #ffe9c5',
                fontFamily: "'Noto Sans JP', sans-serif"
            }}>
                <h1>you choose {num}</h1>
                <h1>My name is {name}</h1>
                <h1>I have {moves} moves</h1>
            </div>
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
        <h1>Tic tac Toe</h1>
        <div className="game">
            <Game/>
        </div>
        <h1>Using Redux</h1>
        <div className="incdnc">
            <Provider store={store}>
                <ReduxIncDex/>
            </Provider>
        </div>

        <div className="routing">
            <h1>Usereducer Concept</h1>
            <img src={think} alt="think" className="think-im" width="100" height="100" />
            <IncrementDecrement/>
        </div>


        <div className="routing">
            <h1>Search for Image Task</h1>
            <Search/>
        </div>


        <div className="routing">
            <h1>List Concept</h1>
                <Todo/>
        </div>


        <div className="routing background-color">
            <h1>React Createcontext concept</h1>
            <FirstName.Provider value={'Ayush'}>
                <LastName.Provider value={'kumar'}>
                    <CompA/>
                </LastName.Provider>
            </FirstName.Provider>
        </div>

        <Form/>

        <div className="routing" style = {{
            color:'#8c9ae8',
            textAlign : 'center',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            textShadow: '0px 2px 4px #ffe9c5',
            fontFamily: "'Noto Sans JP', sans-serif"
        }}>
            <h1>Increment likes</h1>
            <Like/>
        </div>


        <div className="routing">
            <DropdownSelect/>
        </div>

        <div className="routing">
            <Heading value="Image Gallery"/>
        </div>

        <BrowserRouter>
            <div className="routing" style={{flexDirection: 'column'}}>
                <h1>Routing Concept</h1>
                <div style={{flexDirection: 'row', margin:'10px'}}>
                    <NavLink activeClassName="active_class" to="/about"><span style={{marginLeft: '25px'}}>About Us</span></NavLink>
                    <NavLink activeClassName="active_class" to="/contact"><span style={{marginLeft: '5px'}}>Contact Us</span></NavLink>
                </div>
                <Switch>
                    <Route exact path='/' component={About}/>
                     <Route path='/about' component={About}/>
                    <Route path='/about' render={()=> {return <About/>}}/>
                     <Route path='/contact' component={Contact}/>
                    <Route path='/contact/:fname/:lname' component={()=>{return <Contact name="contact"/>}}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>

        <div className="routing">
            <CartGallery/>
        </div>

        <div className="routing">
            <TagInput tags={["nodes","angular js"]}/>
        </div>

        <div className="routing">
            <PasswordRevealer/>
        </div>

        <div className="routing">
            <MultiselectCheckbox options={[{ label: 'Item One' }, { label: 'Item Two' }]} onChange={data => {console.log(data);}}/>
        </div>


        <div className="routing">
            <TrafficSignal/>
        </div>

        <div className="routing">
           <DoApiCallDelay/>
        </div>

        <div className="routing">
            <SingleTextBox/>
        </div>

        <div className="routing">
            <Timer/>
        </div>

        <div className="routing">
            <CheckInternals/>
        </div>

        <div className="routing">
            <Throttle/>
        </div>


        <div className="routing">
            <PubSub/>
        </div>

        <div className="routing">
            <UnderstandContext/>
        </div>

        <div className="routing">
            <ThemeContext/>
        </div>

        <div className="routing">
            <AppMemo/>
        </div>

        <div className="routing">
            <ChangeBackgroundColor/>
        </div>

        <div className="routing">
            <CreateTimer/>
        </div>

        <div className="routing">
            <ParentComp/>
        </div>

    </React.Fragment>,
    document.getElementById('root')
);
//babel compiles these lines and  converts to browser readable code. go to babeljs.io and check it.

reportWebVitals();
export {FirstName,LastName}