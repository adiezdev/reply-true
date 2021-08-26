import React from 'react'
import { Link } from 'react-router-dom'

export const StartScreen = () => {

    return (
        <div> 
            <Link to="/hola">
                <button>
                    ¡VAMOS!
                </button>             
            </Link>
        </div>
    )
}
