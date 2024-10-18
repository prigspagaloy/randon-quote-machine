import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'


const [{ quote, author }] = quotes;

const randomQ = () => quotes[Math.floor(Math.random() * quotes.length)];

const changeColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

const transition = "all 2s";


function App() {
  const [next, setNext] = useState(randomQ());
  const [getColor, setOtherColor] = useState(changeColor());
  const nextQuote = () => {
  setNext(randomQ());
  setOtherColor(changeColor());
  }

  return (
    <div className="background"  style={{ backgroundColor: getColor, transition }}>
      <div id="quote-box">
        <div class="box-content" style={{ color: getColor, transition }}>
            <h2 id="text"><i class="fa fa-quote-left" style={{ fontSize: "24px" }}></i>{randomQ().quote}<i class="fa fa-quote-right" style={{ fontSize: "24px" }}></i></h2>
            <h4 id="author">- {randomQ().author}</h4>
            </div>
            <div class="link">
              <a id="tweet-quote" href="twitter.com/intent/tweet" ><i class="fa fa-twitter" style={{ fontSize: "24px", color: "white", backgroundColor: getColor, transition }}></i></a>
              <button id="new-quote" onClick={nextQuote} style={{ backgroundColor: getColor, transition }}>Change Quote</button>
          </div>
      </div>
    </div>
  )
}

export default App
