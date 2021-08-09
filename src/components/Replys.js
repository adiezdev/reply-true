import React, { useReducer } from 'react'
import { selectTrueWord } from '../data/select-true-word'
import { checkReducer } from '../reducers/checkReducer'

const init = () =>{
    return selectTrueWord || []
}

function Replys({words}) {

    const [state, dispatch] = useReducer(checkReducer, [], init)

    const handleCheck = (status) =>{
        const action = {
            type: status
        }
        dispatch(action)
        console.log(status);
    }
    return (
        <div className="replys">
           {
               words.map((data, i) =>{
                return <div
                        key={i}
                        className="reply">
                            <button
                                onClick={() => handleCheck(data.status)}
                                className={state}
                            >{data.word}</button>
                        </div>
               })
           }
        </div>
    )
}

export default Replys
