import React from 'react'
import '../styles/grid.css'

const Grid = ({ input, setInput, setOperator, equal, clear }) => {
  const addToScreen = (n) => {
    setInput(input.toString() + n.toString())
    setOperator('')
  }

  const del = () => {
    setInput(input.slice(0, input.length - 1))
  }

  return (
    <div className="grid">
      <button class="btn" onClick={clear}>
        c
      </button>
      <button class="btn operator-btn" onClick={() => setOperator('/')}>
        ÷
      </button>
      <button class="btn operator-btn" onClick={() => setOperator('*')}>
        ×
      </button>
      <button class="btn" onClick={del}>
        {'<'}
      </button>
      <button onClick={() => addToScreen(7)} class="btn">
        7
      </button>
      <button onClick={() => addToScreen(8)} class="btn">
        8
      </button>
      <button onClick={() => addToScreen(9)} class="btn">
        9
      </button>
      <button class="btn operator-btn" onClick={() => setOperator('-')}>
        −
      </button>
      <button onClick={() => addToScreen(4)} class="btn">
        4
      </button>
      <button onClick={() => addToScreen(5)} class="btn">
        5
      </button>
      <button onClick={() => addToScreen(6)} class="btn">
        6
      </button>
      <button class="btn operator-btn" onClick={() => setOperator('+')}>
        +
      </button>
      <button onClick={() => addToScreen(1)} class="btn">
        1
      </button>
      <button onClick={() => addToScreen(2)} class="btn">
        2
      </button>
      <button onClick={() => addToScreen(3)} class="btn">
        3
      </button>
      <button class="btn" onClick={equal}>
        =
      </button>
      <button onClick={() => addToScreen(0)} class="btn">
        0
      </button>
      <button class="btn" onClick={() => addToScreen('.')}>
        .
      </button>
    </div>
  )
}

export default Grid
