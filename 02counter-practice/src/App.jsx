import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    console.log(count);
    setCount(count + 1)
    console.log(count); //Dont just update the incremented value cause useState is asynch that means count increase will do process after some time but boh log will logged in console first
  }
  const decreaseValue = () => {
    console.log(count); //Dont just update the incremented value cause useState is asynch that means count increase will do process after some time but boh log will logged in console first
    setCount(count - 1)
    console.log(count);
    
  }
  return (
    <div className=' font-mono font-[1000] bg-gray-500 min-h-screen flex items-center justify-center bg-purple-700'>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-white text-5xl text-shadow-lg'>Counter App</h1>
        <button onClick={addValue} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Increment</button>
        <button onClick={decreaseValue} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>Decrement</button>
        <p className='text-2xl text-white text-shadow-md'>count : { count }</p>
      </div>
    </div>
  )
}

export default App
