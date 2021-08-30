import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QuestionScreen } from '../components/questions/QuestionScreen'
import { StartScreen } from '../components/StartScreen'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>                            
                    <Route exact path="/" component={StartScreen} /> 
                    <Route path="/questions" component={QuestionScreen} />
                </div>
            </Router>
        </div>
    )
}
