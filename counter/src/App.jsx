import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(15)
//let counter = 15
const addValue=()=>{
  console.log("value added" , Math.random());
  setCounter(counter+1)
  // you acn aslo add prevcounter=>prevcounter+1==
  // so what ahappens in it is preety simple that when we click the button then it takes the previous number and add one to it
  if(counter===20){
    setCounter(20)
  }
}

const removeValue=()=>{
  setCounter(counter-1)
  if(counter===0){
    setCounter(0)
  }
}
  return (
    <>
    <h1>Counter</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>add value</button>
    <br/>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
