import React, {  useReducer, useState } from 'react'
import { selectTrueWord } from '../../data/select-true-word';
import Replys from './Replys';
import '../../styles/styles.scss';
import { checkReducer } from '../../reducers/checkReducer';
import { useIncrement } from '../../hooks/useIncrement';
import { Countdown } from './Countdown';
import {useHistory} from 'react-router-dom';


function QuestionScreen() {
    const [num, setNum] = useState(3)

    const history =  useHistory()
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

        handleIncrement()

    }
    const handleIncrement =() =>{
        setTimeout(() => {
            if(selectTrueWord[counter+1]!== undefined){
                increment()

                const action = {
                    type: 'change',
                    payload: selectTrueWord[counter+1].words,
                }
                dispatch(action)
                setNum(3)
            }else{
                history.push('/')
            }
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
                <Countdown
                    handleIncrement={handleIncrement}
                    num={num}
                    setNum={setNum}
                />
            </div>
            <div >
                    <button className="start_button">Salir</button>
            </div>
        </div>
    )
}

export default QuestionScreen;