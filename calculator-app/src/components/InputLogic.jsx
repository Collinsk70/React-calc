import React from 'react'

export default function InputLogic({ inputValue }) {
  return (
    <input className='calculator-display' 
    value={inputValue}
    placeholder='Enter Calculation Here'readOnly />
  )
}
