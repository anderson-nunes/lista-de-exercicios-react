import React, { useState } from 'react'

const Ex01 = () => {

  const [names, setNames] = useState(['Anderson', 'Maria', 'Panda', 'Everton', 'Pedro', 'Antonio'])

  const filterNameA = names.filter(name => name.toLowerCase().includes('a'))

  console.log(filterNameA)

  return (
    <div>
      <h2>Lista de nomes com a letra A</h2>
      <ul>
        {filterNameA.map(nameA => (
          <li>{nameA}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ex01