// import { useState } from 'react'
import User from './Header.jsx'
import './App.css'
import Name, {Profile, Setting, Sign} from './UserComponent.jsx'


function App() {
  return (
    <div>
      <h1>first Component</h1>
      <City/>
      <Profession/>
      <Name/>
      <Profile/>
      <Setting/>
      <h1>{Sign}</h1>
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
