import React, { useState } from 'react'

const Ex02 = () => {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const filterNumbers = numbers.filter(num => num > 5)

  console.log(filterNumbers)

  return (
    <div>
      <ul>
        {filterNumbers.map(num => (

          <li>{num}</li>
        ))}
      </ul>

    </div>
  )
}

export default Ex02