import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const App = () => {
  return (
    <Card bg='dark' text='white' className='m-5' style={{maxWidth: '18rem'}}>  
        <Card.Header> Notbook</Card.Header>
        <Card.Body> 
            <Card.Title>R$ 2500</Card.Title>
            <Card.Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, sint.</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default App
