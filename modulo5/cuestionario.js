//! Módulo 5: Cuestionario 

//! 1. El siguiente fragmento de código:
//! function saludo() { }
//! es:
//* Opciones ✍:
//* a) La llamada a la función saludo.
//* b) La declaración de una función vacía llamada saludo. 
//* c) Incorrecto, el código no significa nada.
//* d) La declaración de una variable llamada saludo.

//! 2. Si una función debe devolver un valor calculado, ¿qué palabra clave utilizarías?
//* Opciones ✍:
//* a) devolver;
//* b) retornar;
//* c) return; 
//* d) calcular;

//! 3. Analiza el siguiente código:
//! function cuenta(numero) {
//!     console.log("cuenta");
//!     if (numero > 0) cuenta(--numero);
//! }
//! cuenta(4);
//! ¿Cuántas veces se mostrará "cuenta" en la consola?
//* Opciones ✍:
//* a) 3
//* b) 4 
//* c) 5
//* d) 0

//! 4. Analiza el siguiente código:
//! let a = 5;
//! function prueba() {
//!     let a = 15;
//!     console.log(a);
//! }
//! ¿Qué se mostrará en la consola?
//* Opciones ✍:
//* a) 15 
//* b) 5
//* c) a
//* d) Nada aparecerá.

//! 5. Revisa el siguiente código:
//! let valor = 30;
//! function prueba(valor) {
//!     console.log(valor);
//! }
//! prueba(50);
//* Opciones ✍:
//* a) 50 
//* b) 30
//* c) valor
//* d) Nada se mostrará.

//! 6. Revisa el siguiente código:
//! let m = 12;
//! let n = 18;
//! function mostrar(m) {
//!     console.log(m);
//! }
//! mostrar(n);
//* Opciones ✍:
//* a) Nada, porque la función espera m y recibe n.
//* b) 12
//* c) 18 
//* d) m

//! 7. Has definido la siguiente expresión de función:
//! let resta = function (x, y) {
//!     return x - y;
//! }
//! ¿Cómo podría definirse la función correspondiente como una función flecha?
//* Opciones ✍:
//* a) let resta = (x, y) => x - y; 
//* b) let resta = function (x, y) => x - y;
//* c) let resta = (x, y) > x - y;
//* d) let resta = (x, y) => { return x - y };

//! 8. La siguiente función flecha está definida:
//! let dividir = (a, b) => a / b;
//! ¿Cómo podrías reescribir esta función sin cambiar lo que hace?
//* Opciones ✍:
//* a) let dividir = (a, b) => { a / b; }
//* b) let dividir = (a, b) => { console.log(a / b); }
//* c) let dividir = (a, b) => { return a / b; } 
//* d) let dividir = (a, b) => return a / b;

//! 9. Podemos usar el método forEach para recorrer los elementos de un arreglo.
//! ¿Cuál de los siguientes fragmentos de código mostrará todos los elementos consecutivos del arreglo frutas en la consola?
//* Opciones ✍:
//* a) frutas.forEach(a => console.log(a)); 
//* b) frutas.forEach(a => a);
//* c) frutas.forEach(console.log(fruta));
//* d) forEach(frutas, a => { console.log(a); });

//! 10. Una función callback es una función que:
//* Opciones ✍:
//* a) Siempre se ejecuta en intervalos definidos.
//* b) Se pasa como argumento a otra función y solo se llama en su código. 
//* c) Contiene una referencia a sí misma.
//* d) Siempre se llama con un retraso predefinido.

//! 11. Analiza el siguiente código:
//! let imprimir = function () {
//!     console.log("hola");
//! }
//! setTimeout(imprimir, 1500);
//! ¿Qué ocurre cuando lo ejecutas?
//* Opciones ✍:
//* a) La consola muestra "hola" después de 1500 segundos.
//* b) La consola muestra "imprimir" después de 1.5 segundos.
//* c) La consola muestra "hola" después de 1.5 segundos. 
//* d) La consola muestra "hola" 1500 veces.
