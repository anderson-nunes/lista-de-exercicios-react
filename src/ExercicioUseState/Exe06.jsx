import React, { useState } from 'react'

const Exe06 = () => {

  const [numberPar, setNumberPar] = useState([2, 3, 5, 8, 19, 13])

  const filterNumbersPar = numberPar.filter(item => item % 2 === 0)


  return (
    <div>
      <ul>
        {filterNumbersPar.map(item => (
          <li>Número: {item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Exe06