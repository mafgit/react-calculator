import React, { useState } from 'react'
import Grid from './Grid'
import Screen from './Screen'
import '../styles/calculator.css'

const Calculator = () => {
  const [input, setInput] = useState('')
  const [prev, setPrev] = useState('')
  const [operator, setOperator] = useState('')

  const equal = () => {
    if (prev === '') return 0

    switch (operator) {
      case '+':
        setInput(parseFloat(prev.slice(0, prev.length - 2)) + parseFloat(input))
        // sliced to remove the space and operator from prev
        break
      case '-':
        setInput(parseFloat(prev.slice(0, prev.length - 2)) - parseFloat(input))
        break
      case '/':
        setInput(parseFloat(prev.slice(0, prev.length - 2)) / parseFloat(input))
        break
      case '*':
        setInput(parseFloat(prev.slice(0, prev.length - 2)) * parseFloat(input))
        break
      default:
        break
    }

    setPrev('')
  }

  const clear = () => {
    setOperator('')
    setPrev('')
    setInput('')
  }

  return (
    <div className="calculator">
      <Screen input={input} prev={prev} />
      <Grid
        setInput={setInput}
        input={input}
        setOperator={setOperator}
        equal={equal}
        clear={clear}
        setPrev={setPrev}
      />
    </div>
  )
}

export default Calculator
