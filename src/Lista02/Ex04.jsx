import React, { useState } from 'react'

const Ex04 = () => {

  const [age, setAge] = useState(
    [
      { nome: "Alice", idade: 25 },
      { nome: "Bob", idade: 17 },
      { nome: "Carol", idade: 32 },
      { nome: "David", idade: 14 },
      { nome: "Eve", idade: 19 }
    ])

  const filterAge = age.filter(item => item.idade < 18)

  return (
    <div>
      <ul>
        {filterAge.map(item => (
          <li>{item.nome} - {item.idade}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ex04