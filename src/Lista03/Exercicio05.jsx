import React, { useEffect } from 'react'
import { useState } from 'react';

const Produtos = () => {

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', preco: 10, quantitade: 1 },
    { id: 2, nome: 'Produto 2', preco: 15, quantitade: 1 },
    { id: 3, nome: 'Produto 3', preco: 20, quantitade: 1 },
  ]);

  const [total, setTotal] = useState(0);

  const increaseAmount = (id) => {

    const newProductsAdded = produtos.map((item) => {

      if (item.id === id) {
        return { ...item, quantitade: item.quantitade + 1 }
      }
      return item
    })
    setProdutos(newProductsAdded)
  }

  const totalCart = () => {

    let newTotal = 0

    produtos.forEach(item => {

      newTotal = newTotal + item.quantitade * item.preco
    })
    setTotal(newTotal)
  }

  useEffect(() => {

    totalCart()
  }, [produtos])


  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <span>{produto.nome}</span>
          <div>
            <span>Valor: R${produto.preco * produto.quantitade}</span>
            <div>
              <button onClick={() => increaseAmount(produto.id)}>+</button>
            </div>
            <br></br>
          </div>
        </div>
      ))}
      <div>
        <h2>Total: R${total}</h2>
      </div>
    </div>
  )
}

export default Produtos