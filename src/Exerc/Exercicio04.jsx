import React from 'react'

const Exercicio04 = () => {

  const produtos = [
    { id: 1, nome: 'Camiseta', preco: 30 },
    { id: 2, nome: 'Calça', preco: 70 },
    { id: 3, nome: 'Tênis', preco: 100 },
    { id: 4, nome: 'Boné', preco: 20 }
  ];

  const productFilter = produtos.filter((item) => item.preco > 30)

  return (
    <div>
      {productFilter.map((item, index) => (
        <div key={index}>
          <span>{item.preco}</span>
        </div>
      ))}
    </div>
  )
}

export default Exercicio04