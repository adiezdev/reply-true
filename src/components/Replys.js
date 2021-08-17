import React from 'react'

function Replys({words, handleCheck}) {
  
    return (
        <div className="replys">
           {
               words.map((data, i) =>{
                   
                return <div
                        key={i}
                        className="reply">
                                <button
                                    className={ `${ data.done && data.status}`}
                                    onClick={() => handleCheck(data.id)}
                                >{data.word}</button> 
                        </div>
               })
           }
        </div>
    )
}

export default Replys
