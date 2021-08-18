import React, { useEffect, useReducer, useState } from 'react'
import { selectTrueWord } from '../data/select-true-word';
import Replys from './Replys';
import '../styles/styles.scss';
import { checkReducer } from '../reducers/checkReducer';


function QuestionScreen() {

    const [posQuetions, setPosQuetions] = useState(0) 
    const {words , img} =selectTrueWord[posQuetions]
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

            setPosQuetions(+1)
            const action = {
                type: 'change',
                payload: selectTrueWord[posQuetions+1].words,
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
            </div>
        </div>
    )
}

export default QuestionScreen;