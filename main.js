const app = document.querySelector("#app");

const input = document.createElement("input");

const button = document.createElement("button");

button.textContent = "Add";

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  console.log(input.value);
  app.appendChild(li);
});

app.appendChild(input);
app.appendChild(button);

/**
 * Fibonacci Number
 *
 * If n ≤ 1, return n. Otherwise, add the last two numbers.
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

/**
 * Fibonacci Sequence
 *
 * Initialize a list with [0, 1]. Then, continue adding the sum of the last two numbers until you reach n elements.
 * @param {number} sequenceLimit
 * @returns {number}
 */
function fibonacciSequence(sequenceLimit) {
  let secuencia = [0, 1];
  while (secuencia.length < sequenceLimit) {
    secuencia.push(
      secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2]
    );
  }
  return secuencia;
}

/**
 * Check Fibonacci
 *
 * Increase a and b until a is equal to or greater than num. Check if a is equal to num.
 * @param {number} n
 * @returns {number}
 */
function isFibonacci(n) {
  let a = 0,
    b = 1;
  while (a < n) {
    [a, b] = [b, a + b];
  }
  return a === n;
}

/**
 * Fibonacci Sum
 *
 * Add the first n numbers of the Fibonacci series.
 * @param {number} n
 * @returns {number}
 */
function fibonacciSum(n) {
  let a = 0,
    b = 1,
    sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a;
    [a, b] = [b, a + b];
  }
  return sum;
}

/**
 * Fibonacci Position
 *
 * Find the position of the number in the Fibonacci series.
 * @param {number} num
 * @returns {number | null}
 */
function fibonacciPosition(num) {
  let a = 0,
    b = 1,
    position = 0;
  while (a < num) {
    [a, b] = [b, a + b];
    position++;
  }
  return a === num ? position : null;
}

/**
 * Fibonacci Distance
 *
 * Calculates the distance between two numbers in the Fibonacci series.
 * @param {number} a
 * @param {number} b
 * @returns {number | null}
 */
function fibonacciDistance(a, b) {
  let posA = fibonacciPosition(a);
  let posB = fibonacciPosition(b);
  return posA !== null && posB !== null ? Math.abs(posB - posA) : null;
}

/**
 * Fibonacci number with n digits.
 *
 * Find the first Fibonacci number with n digits.
 * @param {number} n
 * @returns {number}
 */
function fibonacciWithDigits(n) {
  let a = 0,
    b = 1;
  while (String(a).length < n) {
    [a, b] = [b, a + b];
  }
  return a;
}

/**
 * Fibonacci Pairs
 *
 * Add the first n even numbers of the Fibonacci series.
 * @param {number} n
 * @returns {number}
 */
function fibonacciPairs(n) {
  let a = 0,
    b = 1,
    counter = 0,
    sum = 0;
  while (counter < n) {
    if (a % 2 === 0) {
      sum += a;
      counter++;
    }
    [a, b] = [b, a + b];
  }
  return sum;
}

/**
 * Fibonacci Module
 *
 * Find the nth Fibonacci number modulo m.
 * @param {number} n - number
 * @param {number} m - module
 * @returns {number}
 */
function fibonacciModule(n, m) {
  let a = 0,
    b = 1;
  for (let i = 1; i < n; i++) {
    [a, b] = [b, (a + b) % m];
  }
  return a;
}

/**
 * Fibonacci up to N
 *
 * Generates Fibonacci numbers up to a limit n.
 * @param {number} limit - Limit
 * @return {number[]}
 */
function fibonacciUpToLimit(limit) {
  let a = 0,
    b = 1,
    secuencia = [];
  while (a <= limit) {
    secuencia.push(a);
    [a, b] = [b, a + b];
  }
  return secuencia;
}

/**
 * Fibonacci Number with Memoization
 *
 *
 * @param {number} n
 * @param {object} memo
 * @returns {number}
 */
function fibonacciWithMemo(n, memo) {
  memo = memo || {};
  if (memo[n]) return memo[n];
  if (n <= 1) return n;
  return (memo[n] =
    fibonacciWithMemo(n - 1, memo) + fibonacciWithMemo(n - 2, memo));
}
