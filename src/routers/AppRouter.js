import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import { Countdown } from '../components/Countdown'
import QuestionScreen from '../components/QuestionScreen'
import { StartScreen } from '../components/StartScreen'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>                            
                    <Route exact path="/" component={StartScreen} /> 
                    <Route path="/hola" component={QuestionScreen} />
                </div>
            </Router>
        </div>
    )
}
