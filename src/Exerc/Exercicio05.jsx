import React from 'react'

const Exercicio05 = () => {

  const usuarios = [
    { id: 1, nome: 'Alice', idade: 25 },
    { id: 2, nome: 'Bob', idade: 17 },
    { id: 3, nome: 'Carol', idade: 20 },
    { id: 4, nome: 'David', idade: 16 }
  ];

  const ageUser = usuarios.filter((item) => item.idade >= 20)
  return (
    <div>
      {ageUser.map((age, index) => (
        <div key={index}>
          <p>Idade: {age.idade}</p>
        </div>
      ))}

    </div>
  )
}

export default Exercicio05