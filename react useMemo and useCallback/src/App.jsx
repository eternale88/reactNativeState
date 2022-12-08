import { useState, useReducer, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const SortedList = ({ list, sortFunction }) => {
  console.log('sort list render')

  const sortedList = useMemo(() => {
    console.log('running sort')
    return [...list].sort(sortFunction)
  }, [list, sortFunction])
  return <div>{sortedList.join(', ')}</div>
}
const App = () => {
  const [numbers] = useState([10, 20, 30])

  const total = useMemo(() => numbers.reduce((acc, n) => acc + n, 0), [numbers])

  const [names] = useState(['John', 'Paul', 'George', 'Ringo'])

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const countTotal = count1 + count2

  const sortFunc = useCallback((a, b) => a.localeCompare(b), [])

  return (
    <>
      <div className="App">Total: {total}</div>
      <div className="App">Names: {names.join(', ')}</div>

      <div className="App">Sorted Names:</div>
      <SortedList list={names} sortFunction={sortFunc} />
      <div className="App">Count total: {countTotal}</div>
      <button onClick={() => setCount1(count1 + 1)}>count 1 - {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>count 2 - {count2}</button>
    </>
  )
}
export default App
