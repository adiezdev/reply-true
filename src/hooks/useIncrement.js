import { useState } from "react"



export const useIncrement = (initial = 0 )=>{

    const [counter, setCounter] = useState(initial)

    const increment = () =>{
        setCounter( counter + 1)
    }

    return {
        counter,
        increment
    }
}