import React from 'react'
import '../styles/screen.css'

const Screen = ({ prev, input }) => {
  return (
    <div className="screen">
      <input className="up" value={prev} disabled readOnly />
      <input className="down" value={input} disabled readOnly />
    </div>
  )
}

export default Screen
