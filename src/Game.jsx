import React,{useState,useEffect} from "react";
import {Patterns} from "./Pattern";

const style={
    cursor:'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    margin:'1px',
    height:'33px',
    width:'33px',

}
const gridContainer={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    backgroundColor: '#2196F3',

    padding: '10px'

}
const Square = (props,index)=>{
   return (
       <button key={index} style={style} onClick={()=>props.onClick(props.id)}>{props.value}</button>
   )
}

function Game() {
    const [board,setBoard] = useState(["","","","","","","","",""])
    const [player,setPlayer] = useState("X")
    const [winner,setWinner] = useState({winner:undefined,state:undefined})

    useEffect(()=>{
        checkWinner()
        checkIfTie()
    },[board]);

    useEffect(()=>{
        if (winner.state==="won"){
            alert(`Game Finished! .Winner is ${winner.winner}`);
        }else if(winner.state==="tie"){
            alert(`Game Finished! .No one won`);
        }
    },[winner])

    const chooseSquare=(index)=>{
        setBoard(board.map((val,idx)=>{
                if (val === "" && idx===index){
                    return player
                }
                return val
            })
        );
        if (player === 'X'){
            setPlayer('O')
        }else{
            setPlayer('X')
        }
    }

    const checkWinner = ()=>{
        //iterate on each pattern
        Patterns.forEach((currentPattern)=>{
            let firstPlayer = board[currentPattern[0]];
            if (firstPlayer==="")return false;
            let foundWinner=true;
            currentPattern.forEach((idx)=>{
                if (board[idx]!==firstPlayer){
                    foundWinner=false;
                }
            })
            if (foundWinner===true){
                setWinner({winner:firstPlayer,state:"won"})
            }
        })
    }

    const checkIfTie=()=>{
        let isFilled=true
        board.forEach((val)=>{
            if(val===""){
                isFilled=false
            }
        })
        if (isFilled===true){
            setWinner({winner: "none","state":"tie"});
        }
    }

    return (
        <>
            <div style={gridContainer}>
                {board.map((item,index)=><Square key={index} id={index} value={item} onClick={chooseSquare} />)}
            </div>
        </>
    )
}
export default Game;