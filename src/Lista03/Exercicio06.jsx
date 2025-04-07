import React, { useEffect, useState } from 'react'

const TodoList = () => {

  const [tarefa, setTarefa] = useState([])

  const [novaTarefa, setNovaTarefa] = useState('')

  useEffect(() => {
    const saveList = localStorage.getItem('tarefa')
    if (saveList) {
      setTarefa(JSON.parse(saveList))
    }
  }, [])

  useEffect(() => {
    if (tarefa.length > 0) {
      localStorage.setItem('tarefa', JSON.stringify(tarefa))
    }
  }, [tarefa])

  const handleSubmit = () => {
    setTarefa([...tarefa, novaTarefa])
    setNovaTarefa('')
  }

  const handleChange = (event) => {
    setNovaTarefa(event.target.value)
  }

  const clearChangeTask = (index) => {
    const clearChange = [...tarefa]
    clearChange.splice(index, 1)
    setTarefa(clearChange)
  }

  return (
    <div>
      <input type="text" value={novaTarefa} onChange={handleChange} />
      <button onClick={handleSubmit}>Adicionar Tarefa</button>
      <ul>
        {tarefa.map((tarefa, index) => (
          <div key={index}>
            <li>{tarefa}</li>
            <button onClick={clearChangeTask}>Limpar tarefa</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList