import './App.css';
import { useState,useRef } from 'react';
import useTimer from './useTimer';

//useState -> update state and re-render component (changes will be reflected on UI)
//useRef -> update state but doesn't re-render component (changes will not be reflected on UI )

function App() {

  const [myNum,setMyNum] = useState(0)
  const inputEl = useRef(null)

  function handleClick(e){
    console.log(inputEl.current)
    inputEl.current.style.width = "400px"
  }

  const [isRunning,start,stop,seconds] = useTimer(0)

  return (
    <div className="App">
      <span>
       {isRunning ? seconds : "Timer Not Running"}
      </span>
      <button onClick={start}>Start Timer</button>
      <button onClick={stop}>Stop Timer</button>
    
    </div>
  );
}

export default App;
