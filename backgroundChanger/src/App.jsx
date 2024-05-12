import React from "react";
import "./App.css";

function App() {
    return (
        <div >
            <BackgroundChanger />
        </div>
    );
}

function BackgroundChanger() {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", position: "fixed", bottom: "20px",left: "50%", transform: "translateX(-50%)"}}>
            <ColourButton color="red" />
            <ColourButton color="blue" />
            <ColourButton color="green" />
            <ColourButton color="purple" />
            <ColourButton color="orange" />
            <ColourButton color="brown" />
            <ColourButton color="black" />
        </div>
    );
}

function ColourButton({ color }) {
    return (
        <button
            onClick={() => {
                const body = document.querySelector("body");
                body.style.backgroundColor = color;
            }}
            style={{
                backgroundColor: color,
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s ease',
            }}
        >
            {color}
        </button>
    );
}


export default App;
