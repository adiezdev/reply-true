import React, { useEffect, useReducer, useState } from 'react'
import { selectTrueWord } from '../data/select-true-word';
import Replys from './Replys';
import '../styles/styles.scss';
import { checkReducer } from '../reducers/checkReducer';


function QuestionScreen() {

    const [posQuetions, setPosQuetions] = useState(0) 

    const [word, setWord] = useState(selectTrueWord[posQuetions].words)

    const init = () =>{
        return word || []
    }

    const [true_word, dispatch] = useReducer(checkReducer, [], init)


    useEffect(() => {
        console.log(true_word);
        //setWord(true_word)
        setWord(selectTrueWord[posQuetions].words)
    }, [true_word,posQuetions])
    

    const handleCheck = (wordId) =>{
        const action = {
            type: 'toggle',
            payload: wordId,
        }
        dispatch(action)
        setPosQuetions(+1)
    }
    return (
        <div className="main-quest">
            <div>
                <h3>Elige la palabra correcta</h3>
                <img src={selectTrueWord[posQuetions].img} alt="img-main"/>
                <Replys 
                    words={word}
                    handleCheck={handleCheck}
                />
            </div>
        </div>
    )
}

export default QuestionScreen;