import React, { useState } from 'react'

const UseState = () => {

  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>Somar</button>
    </div>
  )
}

export default UseState