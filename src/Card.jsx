import React from 'react'

function Card({title,description}) {
  return (
    <div style={{
        padding:'20px',
        margin:'10px',
        border:'1px solid black',
        background:'linear-gradient(to right, white,lightblue)'

    }}>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default Card