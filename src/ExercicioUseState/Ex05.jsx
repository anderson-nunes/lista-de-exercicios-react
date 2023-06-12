import React, { useState } from 'react'

const Ex05 = () => {

  const [filterAgeCity, setFilterAgeCity] = useState(
    [
      { nome: "Alice", idade: 25, cidade: "São Paulo" },
      { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
      { nome: "Carol", idade: 40, cidade: "São Paulo" },
      { nome: "David", idade: 28, cidade: "São Paulo" },
      { nome: "Eve", idade: 32, cidade: "São Paulo" }
    ]
  )

  const filter = filterAgeCity.filter(item => item.idade > 30 && item.cidade === 'São Paulo')


  return (
    <div>
      {filter.map(item => (
        <li>{item.nome} - {item.idade} - {item.cidade}</li>
      ))}
    </div>
  )
}

export default Ex05