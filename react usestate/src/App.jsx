import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
const NameList = () => {
  const [nameList, setNameList] = useState(["Jack", "Bob", "John"])
  const [name, setName] = useState("")

  const addName = () => {
   if(name) setNameList([...nameList, name])
   setName("")
  }
  return (
    <div>
      <ul>
        {nameList.map((name)=> (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addName}>add name</button>
    </div>
  )
  
}
const  Counter = () =>  {
  const [count, setCount] = useState(0)

  const addOne = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  )
}

function App() {
  return (
    <>
    <Counter/>
    <NameList/>
    </>
    

  )
}
export default App
