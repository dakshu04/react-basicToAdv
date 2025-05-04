import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'Daksh',
    age: 25,
    address: {
      city: 'Nathdwara',
      state: 'Rajasthan',
      country: 'India'
    }
  }
  let newArr = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Hi with tailwind</h1>
      <Card userName="Daksh Purohit" myArr={newArr}/>
      <Card userName = 'Dakshu Purohit' post='Software Enginner'/>
      <Card/>
    </>
  )
}

export default App
