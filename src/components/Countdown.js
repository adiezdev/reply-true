import React, { useEffect, useRef, useState } from 'react'

export const Countdown = () => {

    const [num, setNum] = useState(3)
    
    let intervalRef = useRef()
    
    const decreasNum = () => {
        setNum((prev) => prev -1)
    }
    
    useEffect(() => {
        
        intervalRef.current = setInterval(decreasNum, 1000);
        return () => clearInterval( intervalRef.current)
        
    }, [])
    //auto pause
    if (num === 0)setInterval(decreasNum, 1000);

    return (
        <div>
            <div>00:0{num}</div>
        </div>
    )
}