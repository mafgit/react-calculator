import React, { useEffect } from 'react'
import '../styles/grid.css'

const Grid = ({
  input,
  setInput,
  setOperator,
  equal,
  clear,
  prev,
  setPrev,
}) => {
  const addToScreen = (n) => {
    setInput(input + n)
  }

  const clickPlusMinus = () => {
    if (input.includes('-')) setInput(input.slice(1, input.length))
    else setInput('-' + input)
  }

  const selectOperator = (o) => {
    if (input === '' && prev === '') return clickPlusMinus()
    let thisInput = ''
    if (prev === '' && input !== '') thisInput = input
    else if (prev !== '' && input !== '') thisInput = equal()
    else if (prev !== '' && input === '') {
      console.log('ran')
      setOperator(o)
      if (o === '*') o = '×'
      if (o === '/') o = '÷'
      if (o === '-') o = '−'
      return setPrev(prev.slice(0, prev.length - 1) + o)
    }

    setOperator(o)
    if (o === '*') o = '×'
    if (o === '/') o = '÷'
    if (o === '-') o = '−'

    setPrev(thisInput + ' ' + o)
    setInput('')
  }

  const del = () => {
    setInput(input.slice(0, input.length - 1))
  }

  const keyupHandler = (e) => {
    if (e.key.match(/^\d$/)) addToScreen(e.key)
    else if (e.key === 'Backspace') del()
    else if ('/+-*'.includes(e.key)) selectOperator(e.key)
    else if (e.key === 'Enter') equal()
    else if (e.key === 'c') clear()
  }

  useEffect(() => {
    window.addEventListener('keyup', keyupHandler)

    return () => {
      window.removeEventListener('keyup', keyupHandler)
    }
  }, [keyupHandler])

  return (
    <div className="grid">
      <button className="btn" onClick={clear}>
        C
      </button>
      <button className="btn back-btn" onClick={del}>
        {'DEL'}
      </button>

      <button onClick={clickPlusMinus} className="btn">
        +/-
      </button>
      <button className="btn operator-btn" onClick={() => selectOperator('/')}>
        ÷
      </button>
      <button onClick={() => addToScreen(7)} className="btn">
        7
      </button>
      <button onClick={() => addToScreen(8)} className="btn">
        8
      </button>
      <button onClick={() => addToScreen(9)} className="btn">
        9
      </button>
      <button className="btn operator-btn" onClick={() => selectOperator('*')}>
        ×
      </button>
      <button onClick={() => addToScreen(4)} className="btn">
        4
      </button>
      <button onClick={() => addToScreen(5)} className="btn">
        5
      </button>
      <button onClick={() => addToScreen(6)} className="btn">
        6
      </button>

      <button className="btn operator-btn" onClick={() => selectOperator('+')}>
        +
      </button>
      <button onClick={() => addToScreen(1)} className="btn">
        1
      </button>
      <button onClick={() => addToScreen(2)} className="btn">
        2
      </button>
      <button onClick={() => addToScreen(3)} className="btn">
        3
      </button>

      <button className="btn operator-btn" onClick={() => selectOperator('-')}>
        −
      </button>
      <button
        className="btn"
        onClick={() => {
          if (!input.includes('.'))
            if (input !== '') addToScreen('.')
            else addToScreen('0.')
        }}
      >
        .
      </button>
      <button onClick={() => addToScreen(0)} className="btn">
        0
      </button>
      <button className="btn equal-btn" onClick={equal}>
        =
      </button>
    </div>
  )
}

export default Grid
