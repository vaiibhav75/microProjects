
import './App.css'
import {useState} from "react";

function App() {
    const [words, setWords] = useState(0);

  return (
    <div className="outerContainer">
        <h2 className="heading">Paragraph Generator</h2>
        <InputArea setWords={setWords}/>
        <Paragraph words={words}/>

    </div>
  )
}

function InputArea ({setWords}) {
    const [curr, setCurr] = useState("");
     return (
        <div className="inputContainer">
            <input className = "inputBox"
                   placeholder = "Enter number of words"
                   onChange = {
                     (e) => setCurr(e.target.value)
                   }
            />

            <button className="generateButton" onClick={
                () => setWords(parseInt(curr))
            }>
                Generate
            </button>
        </div>
    )
}

function Paragraph ({words}) {
    const paragraph = generateParagraph(words);
    return (
        <div className="paragraphContainer">
            <p className="paragraph">
                {paragraph}
            </p>
        </div>
    )
}

const words = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo",
    "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate",
    "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", "Excepteur",
    "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui",
    "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
];

const generateParagraph = (count) => {
    let paragraph = "";
    for (let i = 0; i < count; i++) {
        paragraph += words[Math.floor(Math.random() * words.length)] + " ";
    }
    return paragraph;
}


export default App
