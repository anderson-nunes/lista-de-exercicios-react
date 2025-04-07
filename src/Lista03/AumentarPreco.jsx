import React, { useState } from 'react'

const AumentarPreco = () => {

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', preco: 10, quantitade: 1 },
    { id: 2, nome: 'Produto 2', preco: 15, quantitade: 1 },
    { id: 3, nome: 'Produto 3', preco: 20, quantitade: 1 },
  ]);

  const [total, setTotal] = useState(0);

  const aumentarPreco = (idProduct) => {

    const product = produtos.find((item) => item.id === idProduct)
    if (product) {
      setTotal(total + product.preco)
    }
  }
  return (
    <div>
      {produtos.map((item) => (
        <div key={item.id}>
          <div>{item.nome}</div>
          <div>{item.preco}</div>
          <div>
            <button onClick={() => aumentarPreco(item.id)}>+</button>
          </div>
        </div>
      ))}
      Total:{total}
    </div>
  )
}

export default AumentarPreco
