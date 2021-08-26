import React from 'react'
import { Link } from 'react-router-dom'

export const StartScreen = () => {

    return (
        <div> 
            <Link to="/questions">
                <button>
                    ¡VAMOS!
                </button>             
            </Link>
        </div>
    )
}
