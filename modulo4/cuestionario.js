//? Cuestionario del Módulo 4

//! 1. La condición if(a >= 10) puede ser reemplazada por:
//* Opciones ✍:
//* a) if (!(a < 10))
//* b) if (a == 10 && a > 9)
//* c) if (a > 9 || a == 10)
//* d) if (a < 10)

//! 2. La condición if(!x) puede ser reemplazada por:
//* Opciones ✍:
//* a) if (!!x)
//* b) if (x == false)
//* c) if (x === true)
//* d) if (x > 0)

//! 3. Reescribe el siguiente código usando el operador ternario:
//! let estado;
//! if (activo) {
//!     estado = "Habilitado";
//! } else {
//!     estado = "Deshabilitado";
//! }
//* Opciones ✍:
//* a) let estado = activo ? "Habilitado" : "Deshabilitado";
//* b) let estado = activo ? "Deshabilitado" : "Habilitado";
//* c) let estado = (activo)("Habilitado")("Deshabilitado");
//* d) let estado = activo ? ("Habilitado", "Deshabilitado");

//! 4. ¿Cuál de los siguientes operadores es ternario?
//* Opciones ✍:
//* a) typeof
//* b) ++
//* c) ? : (condicional)
//* d) =

//! 5. Analiza el siguiente código:
//! let y = 50;
//! if (y < 30) y = 10;
//! console.log(y);
//* Opciones ✍:
//* a) 10
//* b) 50
//* c) undefined
//* d) null

//! 6. ¿Cuál es la condición equivalente a este código?
//! if (puntaje <= 100 && puntaje >= 50) {
//!     console.log("Pasa");
//! }
//* Opciones ✍:
//* a) if (puntaje == 100)
//* b) if (puntaje >= 50 && puntaje <= 100)
//* c) if (puntaje > 100)
//* d) if (puntaje != 50)

//! 7. ¿Qué valores deben tener las variables para que se ejecute el bloque?
//! if (edad >= 21 && estudiante == false) {
//!     console.log("Sin descuento");
//! }
//* Opciones ✍:
//* a) edad: 18, estudiante: true
//* b) edad: 21, estudiante: false
//* c) edad: 19, estudiante: false
//* d) edad: 25, estudiante: true

//! 8. El uso del switch permite:
//* Opciones ✍:
//* a) Depurar programas automáticamente.
//* b) Ejecutar diferentes acciones basadas en un valor.
//* c) Cambiar el modo de ejecución a modo debug.
//* d) Reemplazar ciclos for.

//! 9. Reescribe esta condición con un switch:
//! if (estado === "Activo") {
//!     console.log("En uso");
//! }
//* Opciones ✍:
//* a) switch(estado) { case "Activo": console.log("En uso"); break; }
//* b) switch(estado) case "Activo": console.log("En uso");
//* c) switch(estado) { case === "Activo": console.log("En uso"); };
//* d) switch(estado) { console.log("En uso"); break; }

//! 10. ¿Cuál de las siguientes estructuras es incorrecta?
//* Opciones ✍:
//* a) if...else
//* b) if...else...else if
//* c) if...else if...else
//* d) if...else if

//! 11. ¿Cuál de las siguientes no es una instrucción de bucle en JavaScript?
//* Opciones ✍:
//* a) if...else
//* b) for...in
//* c) for...of
//* d) while

//! 12. ¿Qué bucle se usa para iterar las claves de un objeto?
//* Opciones ✍:
//* a) for...of
//* b) for...in
//* c) while
//* d) do...while

//! 13. Si queremos mostrar elementos de un array en orden inverso:
//! let frutas = ["Manzana", "Banana", "Cereza"];
//* Opciones ✍:
//* a) for(let i = frutas.length - 1; i >= 0; i--) console.log(frutas[i]);
//* b) for(let i = 0; i < frutas.length; i++) console.log(frutas[i]);
//* c) for(let fruta of frutas) console.log(fruta);
//* d) for(let i = frutas.length; i > 0; i++) console.log(frutas[i]);

//! 14. Analiza este código:
//! let b = 15;
//! do {
//!     console.log(b++);
//! } while (b < 20);
//! ¿Qué bloque puede reemplazar el do...while?
//* Opciones ✍:
//* a) while (b > 20) console.log(b);
//* b) while (b < 20) console.log(b++);
//* c) while (b == 20) console.log(b);
//* d) while (b > 15) console.log(b);

//! 15. Analiza el siguiente código:
//! for (let i = 8; i > 1; i -= 2) console.log("Hola");
//* ¿Cuántas veces se mostrará "Hola" en la consola?
//* Opciones ✍:
//* a) 4
//* b) 5
//* c) 3
//* d) 8

//! 16. Dado un array de animales, ¿cómo mostramos 2 elementos?
//! let animales = ["Perro", "Gato", "Conejo", "Caballo"];
//* Opciones ✍:
//* a) for (let i = 0; i < animales.length; i+=2) console.log(animales[i]);
//* b) for (let animal of animales) console.log(animal);
//* c) for (let i = 1; i < animales.length; i++) console.log(animales[i]);
//* d) for (let n in animales) console.log(n);

//! 17. Analiza este bucle:
//! for (let n = 5; n > 0; n--) console.log(n);
//* ¿Qué bucle puede reemplazarlo?
//* Opciones ✍:
//* a) let n = 5; while (n > 0) console.log(n--);
//* b) let n = 5; while (n == 0) console.log(n);
//* c) let n = 0; while (n < 5) console.log(n++);
//* d) let n = 5; while (n < 5) console.log(n--);

//! 18. Analiza este bucle:
//! for (let x = 5; x < 5; x++) console.log("Prueba");
//* ¿Cuántas veces se ejecutará?
//* Opciones ✍:
//* a) Ninguna
//* b) Una
//* c) Cinco
//* d) Diez

//! 19. Analiza el siguiente objeto:
//! let coche = { marca: "Toyota", modelo: "Corolla" };
//! ¿Qué mostrará este bucle?
//! for (let clave in coche) console.log(clave);
//* Opciones ✍:
//* a) "marca", "modelo"
//* b) "Toyota", "Corolla"
//* c) undefined
//* d) Error

//! 20. Analiza este array:
//! let pasos = [5, 10, 15];
//! ¿Qué mostrará este bucle?
//! for (let paso of pasos) console.log(paso);
//* Opciones ✍:
//* a) 5, 10, 15
//* b) "[5, 10, 15]"
//* c) undefined
//* d) null
