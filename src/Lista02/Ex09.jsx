import React from 'react'

const Ex09 = () => {

  const myArray = [
    { id: 1, name: 'Anderson', age: 36, city: 'Canoas' },
    { id: 2, name: 'Patricia', age: 36, city: 'Canoas' },
    { id: 3, name: 'Everton', age: 30, city: 'Berlin' },
    { id: 4, name: 'Thiago', age: 24, city: 'Minas Gerais' }
  ]

  const doubleAge = myArray.map(newArray => ({
    ...newArray,
    doubleAge: newArray.age * 2

  }))

  return (
    <div>
      <ul>{doubleAge.map((user) => (
        <div key={user.id}>
          <li>Nome: {user.name}</li>
          <li>Idade: {user.doubleAge}</li>
          <li>Cidade: {user.city}</li>
        </div>
      ))}

      </ul>
    </div>
  )
}

export default Ex09