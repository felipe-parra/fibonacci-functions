# Fibonacci Exercises with JavaScript

## Fibonacci Number

Calculate your position in a row that follows the Fibonacci sequence. For example, if you find yourself in a peculiar line where the number of people in each position follows this series, you can determine how many people preceded you based on your position.

- Algoritmo: If n ≤ 1, return n. Otherwise, add the last two numbers.

```
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

## Fibonacci sequence

Imagine that you are planning a series of events and the number of guests at each event follows the Fibonacci sequence. This feature would let you know how many guests you should invite to the next n events.

- Algorithm: Initialize a list with [0, 1]. Then, continue adding the sum of the last two numbers until you reach n elements.

```
function secuenciaFibonacci(n) {
    let secuencia = [0, 1];
    while (secuencia.length < n) {
        secuencia.push(secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2]);
    }
    return secuencia;
}
```

## Check Fibonacci:

Suppose you are playing a game where the points you win each round form a Fibonacci sequence. This feature would allow you to check if a given score is part of that series.

- Algorithm: Increase a and b until a is equal to or greater than num. Check if a is equal to num.

```
function esFibonacci(num) {
    let a = 0, b = 1;
    while (a < num) {
        [a, b] = [b, a + b];
    }
    return a === num;
}
```

## Fibonacci sum:

Imagine that you are saving money and you decide to save an amount that follows the Fibonacci series each month. This feature would tell you how much you have saved after n months.

- Algorithm: Add the first n numbers of the Fibonacci series.

```
function sumaFibonacci(n) {
    let a = 0, b = 1, suma = 0;
    for (let i = 0; i < n; i++) {
        suma += a;
        [a, b] = [b, a + b];
    }
    return suma;
}
```

## Fibonacci Pairs:

Suppose you only want to invite an even number of guests to your events, but following the Fibonacci series. This function would tell you how many guests you would have after n events.

- Algorithm: Add the first n even numbers of the Fibonacci series.

```
function fibonacciPares(n) {
    let a = 0, b = 1, contador = 0, suma = 0;
    while (contador < n) {
        if (a % 2 === 0) {
            suma += a;
            contador++;
        }
        [a, b] = [b, a + b];
    }
    return suma;
}
```

## Fibonacci position:

Imagine that you are searching for a number in a list that follows the Fibonacci sequence. This function would tell you what position that number is in.

- Algorithm: Find the position of the number in the Fibonacci series.

```
function posicionFibonacci(num) {
    let a = 0, b = 1, pos = 0;
    while (a < num) {
        [a, b] = [b, a + b];
        pos++;
    }
    return (a === num) ? pos : null;
}
```

## Fibonacci Distance:

If you have two numbers in the Fibonacci sequence and you want to know how many numbers are between them, this function would give you the answer.

- Algorithm: Calculates the distance between two numbers in the Fibonacci series.

```
function distanciaFibonacci(a, b) {
    let posA = posicionFibonacci(a);
    let posB = posicionFibonacci(b);
    return (posA !== null && posB !== null) ? Math.abs(posB - posA) : null;
}

function posicionFibonacci(num) {
    let a = 0, b = 1, pos = 0;
    while (a < num) {
        [a, b] = [b, a + b];
        pos++;
    }
    return (a === num) ? pos : null;
}
```

## First Fibonacci with digits:

Suppose you are in a guessing game and you need to find the first Fibonacci number with a certain number of digits.

- Algorithm: Find the first Fibonacci number with n digits.

```
function fibonacciDigitos(n) {
    let a = 0, b = 1;
    while (String(a).length < n) {
        [a, b] = [b, a + b];
    }
    return a;
}
```

## Fibonacci Module:

Imagine you are playing a dice game where the points you earn are based on the Fibonacci series, but you don't want to exceed a certain limit. Using the module you ensure that your score stays within that limit.

- Algorithm: Find the nth Fibonacci number modulo m.

```
function fibonacciModulo(n, m) {
    let a = 0, b = 1;
    for (let i = 1; i < n; i++) {
        [a, b] = [b, (a + b) % m];
    }
    return a;
}
```

## Fibonacci up to N:

Imagine you are creating a piece of art based on the Fibonacci sequence and you only want to include numbers up to a certain limit.

- Algorithm: Generates Fibonacci numbers up to a limit n.

```
function fibonacciHastaN(n) {
    let a = 0, b = 1, secuencia = [];
    while (a <= n) {
        secuencia.push(a);
        [a, b] = [b, a + b];
    }
    return secuencia;
}
```
