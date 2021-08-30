import React from 'react'
import { Link } from 'react-router-dom'

export const StartScreen = () => {

    return (
        <div> 
            <h1>REPLY TRUE</h1>
            <br/>
            <p>Agudiza tu atención respodiendo correctamente a estas palabras</p>
            <br/>
                <Link
                    to="/questions"
                >
                        <button
                            className="start_button"
                        >
                            ¡VAMOS!
                        </button>             
                </Link>
        </div>
    )
}
