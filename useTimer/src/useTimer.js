import { useState,useRef } from "react";

const useTimer = (time) => {

    const [isRunning,setIsRunning] = useState(false)
    const [seconds,setSeconds] = useState(time)
    let timer = useRef(null)

    const start = () => {

     timer.current = setInterval(()=>{
            setSeconds(seconds => seconds+1)
        },1000)

        setIsRunning(true)
    }

    const stop = () => {
        setIsRunning(false)
        setSeconds(time)
        console.log(timer)
        clearInterval(timer.current)

    }

    return [isRunning,start,stop,seconds]

}

export default useTimer;