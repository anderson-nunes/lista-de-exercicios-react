// Descrição
// Nesta pequena tarefa, você recebe uma sequência de números separados por espaços e deve retornar o número mais alto e o mais baixo.

//   Nota:
// Todos os números são válidos Int32, sem necessidade de validá - los.
// Sempre haverá pelo menos um número na STRING de entrada.
// A STRING de saída deve ser dois números separados por um único espaço, e o número mais alto é o primeiro.
// Código de Exemplo:
// highAndLow("1 2 3 4 5"); // retorna "5 1"
// highAndLow("1 2 -3 4 5"); // retorna "5 -3"
// highAndLow("1 9 3 4 -5"); // retorna "9 -5

function highAndLow(numbers) {

  console.log(typeof numbers)

  const numberArray = new Int32Array(numbers.trim().split(' '))

  const max = Math.max(...numberArray)

  const min = Math.min(...numberArray)

  console.log(max)
  console.log(min)

  return `${max} ${min}`

}

highAndLow("1 2 3 4 5")