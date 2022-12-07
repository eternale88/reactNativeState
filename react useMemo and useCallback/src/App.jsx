import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const UserForm = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      /* For forms we can combine whatever comes in on our existing state with useReducer, no switch needed*/
      return {
        ...state,
        ...action,
      }
    },
    {
      first: '',
      last: '',
    }
  )
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      {state.first} {state.last}
    </div>
  )
}
function NameList() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_NAME':
          return { ...state, name: action.payload }
        case 'ADD_NAME':
          return { ...state, names: [...state.names, state.name], name: '' }
      }
    },
    {
      names: [],
      name: '',
    }
  )
  return (
    <div className="App">
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: 'SET_NAME', payload: e.target.value })
        }
      />
      <button
        onClick={() =>
          dispatch({ type: 'ADD_NAME', payload: [...state.names, state.name] })
        }
      >
        add name
      </button>
      <ul>
        {state.names.map((name, i) => {
          return <li key={i}>{name}</li>
        })}
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <NameList />
      <UserForm />
    </div>
  )
}
export default App
