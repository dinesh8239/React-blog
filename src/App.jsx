// import { useState } from 'react'
import User from './Header.jsx'
import './App.css'
import Name, { Profile, Setting, Sign } from './UserComponent.jsx'


function App() {
  const userName = "Anil Sidhu Todos"
  const a = 20;
  const b = 50;
  return (
    <div className="container">
      <h1>{userName}</h1>
      <img 
             src="https://images.unsplash.com/25/puppy-love.jpg?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwdXBweXxlbnwwfHwwfHx8MA%3D%3D"
        alt="dog image"
        className="photo"
      />
      <ul>
        <li><b>Invent new traffic lights</b></li>
        <li><b>Rehearse a movie scene</b></li>
        <li><b>Improve the spectrum technology</b></li>
      </ul>
      <button onClick={callFun}>Click Me</button>
    </div>
  )
}

function callFun() {
  alert("function called")
}


export default App
