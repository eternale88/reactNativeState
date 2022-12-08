import { useState, useReducer, useMemo, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const [names, setNames] = useState([])
  const [selectedName, setSelectedName] = useState(null)
  const [selectedNameDetails, setSelectedNameDetails] = useState(null)

  useEffect(() => {
    const getNames = async () => {
      const res = await fetch('/names.json')
      const data = await res.json()
      setNames(data)
    }
    getNames()
  }, [])

  // useEffect(() => {
  //   const getSelectedName = async () => {
  //     const res = await fetch(`/${selectedName}.json`)
  //     const data = await res.json()
  //     setSelectedNameDetails(data)
  //   }
  //   if (selectedName) getSelectedName()
  // }, [selectedName])
  const onSelectedName = (name) => {
    const getSelectedName = async () => {
      const res = await fetch(`/${name}.json`)
      const data = await res.json()
      setSelectedNameDetails(data)
    }
    getSelectedName()
  }

  return (
    <>
      <div className="App">
        Names:{' '}
        {names.map((name, i) => (
          <button key={i} onClick={() => onSelectedName(name)}>
            {name}
          </button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </>
  )
}
export default App
