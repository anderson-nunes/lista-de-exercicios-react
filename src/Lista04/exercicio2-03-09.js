// Descrição:
// Dada uma lista de array, sua tarefa é encontrar a soma dos valores mínimos em cada linha

// Nota:
// Todos os números são válidos Int32 , sem necessidade de validá-los.
// Sempre haverá pelo menos um número em cada array de entrada.
// A soma dos números não excederá o limite do formato Int32
// Código de Exemplo:
// [ [5, 4, 2, 9], [7, 9, 15], [6, 9, 11, 17] ]
// => 2 + 7 + 6
// => 15

function sumOfMinimums(array) {

  let resultado = 0

  for (let i = 0; i < array.length; i++) {

    console.log(array[i])

    const firstNUmber = [...array[i]].sort((a, b) => a - b)[0]

    resultado += firstNUmber

    console.log(firstNUmber)

  }

  console.log(array)

  return resultado
}

const resp = sumOfMinimums([[5, 4, 2, 9], [7, 9, 15], [6, 9, 11, 17]])

console.log(resp)


