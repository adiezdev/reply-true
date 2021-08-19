import React, {  useReducer, useState } from 'react'
import { selectTrueWord } from '../data/select-true-word';
import Replys from './Replys';
import '../styles/styles.scss';
import { checkReducer } from '../reducers/checkReducer';
import { useIncrement } from '../hooks/useIncrement';
import { Countdown } from './Countdown';


function QuestionScreen() {

    const {counter , increment} = useIncrement(0)
    const {words , img} =selectTrueWord[counter]

    const init = () =>{
        return words || []
    }
    const [true_word, dispatch] = useReducer(checkReducer, [], init)

    
    const handleCheck = (wordId) =>{
        const action = {
            type: 'toggle',
            payload: wordId,
        }
        dispatch(action)

        setTimeout(() => {
            increment()

            const action = {
                type: 'change',
                payload: selectTrueWord[counter+1].words,
            }
            dispatch(action)

        }, 150);
    }

    return (
        <div className="main-quest">
            <div>
                <h3>Elige la palabra correcta</h3>
                <img src={img} alt="img-main"/>
                <Replys 
                    words={true_word}
                    handleCheck={handleCheck}
                />
                <br/>
                <Countdown/>
            </div>
        </div>
    )
}

export default QuestionScreen;