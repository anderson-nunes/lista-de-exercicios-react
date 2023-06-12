import React from 'react'

const Exercicio01 = () => {

  const nomes = ['Alice', 'Bob', 'Carol', 'David'];

  return (
    <div>
      <>
        <h1>Exercício 01</h1>
        {nomes.map((item, index) => (

          <div key={index}>
            <li>{item}</li>
          </div>

        ))}
      </>
    </div>
  )
}

export default Exercicio01