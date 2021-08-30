import React, { useEffect, useRef } from 'react'

export const Countdown = ({handleIncrement, num, setNum}) => {

    let intervalRef = useRef()
    
    useEffect(() => {
        
        const decreasNum = () => {
            setNum((prev) => prev -1)
        }

        intervalRef.current = setInterval(decreasNum, 1000);
        return () => clearInterval( intervalRef.current)
        
    }, [setNum])
    //auto pause
    if (num <= 0){
        handleIncrement()
        setNum(3)
    }

    return (
        <div>
            <h1>00:0{num}</h1>
        </div>
    )
}
