// Felipe Parra

// n =      0  1  2  3  4  5  6   7   8   9  10
// fib(n) = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
a, b;
// Una funcion que reciba un argunmento "n", y regrese la "n"-enesima posicion
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n - 2)
function fibonacciValueOfIndex(n) {
  // Secuencia
  let sequence = [0, 1];
  let response = 0;

  for (let i = 1; i < n; i++) {
    sequence = [sequence[1], sequence[0] + sequence[1]];
    //[a,b] = [b, a +b]
  }

  // while(sequence.length < n){
  //   sequence.push(
  //     sequence[sequence.length - 1] + sequence[sequence.legnth - 2]
  //   )
  // }

  //

  return sequence[-1];
}

async function getFibonacciValueFromIndex(n) {
  const res = await fetch("/?id=" + n);
  return res;
}

// n = 3
// a = 0, b = 1
// 0 < 3 - While
// a = 1, b = 1
// 1 < 3 - while
// a = 1, b = 2
// 1 < 3 - while
// a = 2, b = 3
// 2 < 3 - while
// a = 3, b = 5
// 3 < 3 - While, sale
// retorno 3

console.log(fibonacci(1));
