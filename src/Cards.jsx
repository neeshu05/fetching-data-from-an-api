import React from 'react'
import Card from './Card.jsx'

function Cards(props) {
  return (
    <>
      <h1 style={{
        textTransform:'capitalize'
      }}>Fetching data from an api</h1>
    {
      props.pos.map(e => <Card title = {e.title} description= {e.body}></Card>)
    }
     
    </>
  )
}

export default Cards