import { useState } from 'react'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0)
    const addValue = () => {
      setCounter(counter + 1)
    }
    // const addValue = () => {
    //   setCounter((prevCounter) => prevCounter + 1)
    //   setCounter((prevCounter) => prevCounter + 1)
    //   setCounter((prevCounter) => prevCounter + 1)
    //   setCounter((prevCounter) => prevCounter + 1)
    // }
    const removeValue = () => {
      setCounter(counter - 1)
    }
  // let counter = 15 
  // const addValue = () => {
  //   counter++
  //   console.log(counter);
  // }
  return (
    <>
      <h1>React course with Daksh {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
