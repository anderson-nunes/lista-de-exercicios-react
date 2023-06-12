import React, { useState } from 'react'

const Ex03 = () => {

  const [pandaName, setPandaName] = useState(["Dragão", "Cachorro", "Fada", "Panda"])

  const filterNamePanda = pandaName.includes("Panda")

  return (
    <div>
      <ul>
        {pandaName.map(name => (
          <li>{name}</li>
        ))}
      </ul>
      <p>A palavra "Panda" consta na lista ? {filterNamePanda ? 'SIM' : 'NÃO'} </p>
    </div>
  )
}

export default Ex03