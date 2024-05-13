import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
    display: 'flex'
}

const squareStyle = {
    'width':'60px',
    'height':'60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'white'
}

const boardStyle = {
    'backgroundColor': '#eee',
    'width': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid'
}

const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
}

const instructionsStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px',
}

const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#8acaca',
    'color': 'white',
    'fontSize': '16px',
}

function Square({value,onClick}) {
    return (
        <div
            className="square"
            style={squareStyle}
            onClick={onClick}>
            {value}
        </div>
    );
}

function Board() {
    const[squares,setSquares] = useState(Array(9).fill(null));
    const[xIsNext,setXIsNext] = useState(true);
    const[winner,setWinner] = useState("None");
    function handleClick(i){
        const newSquares = [...squares];
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }
        newSquares[i]=xIsNext?'X':'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
        const newWinner = calculateWinner(newSquares);

        if(newWinner){

            setWinner(newWinner);
        }

    }
    function renderSquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }
    function resetBoard(){
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setWinner("None");
    }


    return (
        <div style={containerStyle} className="gameBoard">
            <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{xIsNext?'X':'O'}</span></div>
            <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner}</span></div>

            <button style={buttonStyle} onClick={resetBoard}>Reset</button>
            <div style={boardStyle}>
                <div className="board-row" style={rowStyle}>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row" style={rowStyle}>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row" style={rowStyle}>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    );
}

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,4,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i =0;i<lines.length;i++){
        const[a,b,c]=lines[i];
        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}

function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);