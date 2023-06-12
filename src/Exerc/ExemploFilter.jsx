import React from 'react'

const ExemploFilter = () => {

  const Product = [

    { name: 'Anderson', peso: 70, esporte: 'Futebol' },
    { name: 'Marcela', peso: 50, esporte: 'Natação' },
    { name: 'Laércio', peso: 70, esporte: 'Volei' },
  ]

  const filteredProducts = Product.filter((item) => item.peso > 50)

  console.log(filteredProducts)

  return (
    <div>
      {filteredProducts.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>{item.peso}</p>
          <span>{item.esporte}</span>
        </div>
      ))}

    </div>
  )
}

export default ExemploFilter