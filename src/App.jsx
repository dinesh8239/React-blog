// import { useState } from 'react'
import User from './Header.jsx'
import './App.css'

function App() {
  return (
    <div>
      <h1>first Component</h1>
      <City/>
      <Profession/>
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
