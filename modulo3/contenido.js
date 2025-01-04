//? Contenido

//! Operadores
// Los operadores en JavaScript permiten realizar operaciones matemáticas, lógicas y de asignación de valores.
//* Ejemplo:
let suma = 10 + 5; // 15
let resta = 20 - 10; // 10
let multiplicacion = 4 * 5; // 20
let division = 20 / 4; // 5
let modulo = 7 % 3; // 1
let potencia = 3 ** 3; // 27

//! Operadores de Asignación
// Asignan valores a las variables y permiten operaciones combinadas.
//* Ejemplo:
let x = 10; // Asignación inicial
x += 5; // Suma y asignación: 15
x -= 3; // Resta y asignación: 12
x *= 2; // Multiplicación y asignación: 24
x /= 4; // División y asignación: 6
x %= 2; // Módulo y asignación: 0
x **= 3; // Potencia y asignación: 0

//! Operadores Aritméticos
// Operan sobre valores numéricos.
//* Ejemplo:
let a = 8;
let b = 3;
console.log(a + b); // 11
console.log(a - b); // 5
console.log(a * b); // 24
console.log(a / b); // 2.666...
console.log(a % b); // 2
console.log(a ** b); // 512

//! Operadores Aritméticos Unarios
// Operan sobre un solo operando.
//* Ejemplo:
let c = 5;
console.log(+c); // 5
console.log(-c); // -5

//! Operadores de Incremento y Decremento
// Incrementan o decrementan el valor de una variable.
//* Ejemplo:
let d = 7;
console.log(++d); // 8 (pre-incremento)
console.log(d++); // 8 (post-incremento)
console.log(--d); // 8 (pre-decremento)
console.log(d--); // 8 (post-decremento)

//! Operadores Lógicos
// Realizan operaciones lógicas sobre valores booleanos.
//* Ejemplo:
let e = true;
let f = false;
console.log(e && f); // false (AND)
console.log(e || f); // true (OR)
console.log(!e); // false (NOT)

// AND
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

//NOT
console.log(!true);
console.log(!false);

//! Valores falsos 👉 false 0 ''
//! Valores Verdaderos 👉 true 1 'hola'

//! Operadores Lógicos con Valores No Booleanos
// Devuelven valores dependiendo de la evaluación lógica.
//* Ejemplo:
console.log(0 || "Texto"); // "Texto"
console.log(1 || "Texto"); // 1

console.log(1 && "Texto"); // "Texto"
console.log(0 && "Texto"); // 0
console.log(null || undefined); // undefined

//! Comparaciones
// Compara dos valores y devuelve un booleano.
//* Ejemplo:
console.log(10 == "10"); // true (igualdad débil)
console.log(10 === "10"); // false (igualdad estricta)
console.log(10 != "10"); // false (desigualdad débil)
console.log(10 !== "10"); // true (desigualdad estricta)
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false

//! Métodos de Interacción con el Usuario
// Permiten interactuar con el usuario mediante cuadros de diálogo.
//* Ejemplo:
alert("¡Bienvenido a JavaScript!");
let nombre = prompt("¿Cómo te llamas?", "Invitado");
console.log(`Hola, ${nombre}`);
let esMayor = confirm("¿Eres mayor de edad?");
console.log(esMayor); // true o false

