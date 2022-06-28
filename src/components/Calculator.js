/* FIXME: input & prev screens are problematic */
import React, { useEffect, useState } from 'react'
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
        setInput(parseFloat(prev) + parseFloat(input))
        break
      case '-':
        setInput(parseFloat(prev) - parseFloat(input))
        break
      case '/':
        setInput(parseFloat(prev) / parseFloat(input))
        break
      case '*':
        setInput(parseFloat(prev) * parseFloat(input))
        break
      default:
        break
    }
  }

  const clear = () => {
    setOperator('')
    setPrev('')
    setInput('')
  }

  useEffect(() => {
    setPrev(input)
    setInput('')
  }, [operator])

  return (
    <div className="calculator">
      <Screen input={input} prev={prev} />
      <Grid
        setInput={setInput}
        input={input}
        setOperator={setOperator}
        equal={equal}
        clear={clear}
      />
    </div>
  )
}

export default Calculator
