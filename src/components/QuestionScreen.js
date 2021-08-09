import React, { useState } from 'react'
import { selectTrueWord } from '../data/select-true-word';
import Replys from './Replys';
import '../styles/styles.scss';

function QuestionScreen() {
    const [posQuetions, setPosQuestion] = useState(Math.floor(Math.random()*3)|| 0) 
    const [level, setLevel] = useState(0)
    
    console.log(posQuetions);
    
    const data = selectTrueWord[level]
    return (
        <div className="main-quest">
            <div
                key={data.id}>
                <h2>Nivel {data.level}</h2>
                <h3>Elige la palabra correcta</h3>
                <img src={data.quetions[posQuetions].img} alt="img-main"/>
                <Replys 
                    words={data.quetions[posQuetions].words}
                />
            </div>
        </div>
    )
}

export default QuestionScreen;