import React from 'react'
import { useState, useEffect } from 'react';

const AtualizaDados = () => {

  const [itens, setItens] = useState([
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' },
  ]);

  const atualizarItens = (id) => {

    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id ? { ...item, nome: `${item.nome} (Atualizei)` } : item
      )
    )
  }

  return (
    <div>
      {itens.map((item) => (

        <li key={item.id}>
          {item.nome}
          {''}
          <button onClick={() => atualizarItens(item.id)}>Atualizar</button>
        </li>
      ))}

    </div>
  )
}

export default AtualizaDados