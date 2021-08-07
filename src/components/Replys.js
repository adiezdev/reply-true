import React from 'react'

function Replys({words}) {
    return (
        <div className="replys">
           {
               words.map((data, i) =>{
                return <div
                        key={i}
                        className="reply">
                            <button>{data.word}</button>
                        </div>
               })
           }
        </div>
    )
}

export default Replys
