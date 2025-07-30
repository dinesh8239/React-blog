// import { useState } from 'react'
import User from './Header.jsx'
import './App.css'
import Name, {Profile, Setting, Sign} from './UserComponent.jsx'


function App() {
  const userName = "John Snow"
  const a = 20;
  const b = 50;
  return (
    <div>
      <h1>first Component</h1>
      <City/>
      <Profession/>
      <Name/>
      <Profile/>
      <Setting/>
      <h1>{Sign}</h1>
      <h1>{userName}</h1>
      <h2>{a+b}</h2>
      {10+20+30}
    </div>
  )
}

function City() {
  return (
    <h2>Bengaluru</h2>
  )
}

function Profession() {
  return (
    <h3>
      Software Engineer
    </h3>
  )
}
export default App
