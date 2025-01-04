//? Preguntas Modificadas

//! 1. La condición if(a > 5) puede ser reemplazada por:
//* Opciones ✍:
//* a) if (!(a <= 5))
//* b) if (a == 5)
//* c) if (a < 5)
//* d) if (!(a >= 5))

//! 2. La condición if(!x) puede ser escrita como:
//* Opciones ✍:
//* a) if (x == true)
//* b) if (x === false)
//* c) if (!!x)
//* d) if (x != false)

//! 3. Reescribe el siguiente código usando el operador ternario:
//! let mensaje;
//! if (activo) {
//!     mensaje = "Encendido";
//! } else {
//!     mensaje = "Apagado";
//! }
//* Opciones ✍:
//* a) let mensaje = activo ? "Encendido" : "Apagado";
//* b) let mensaje = activo ? "Apagado" : "Encendido";
//* c) let mensaje = activo ? ("Encendido", "Apagado");
//* d) let mensaje = activo == true ? "Encendido" : "Apagado";

//! 4. ¿Cuál de los siguientes es un operador ternario?
//* Opciones ✍:
//* a) ++ (incremento)
//* b) typeof
//* c) ? : (condicional)
//* d) = (asignación)

//! 5. Analiza el siguiente código:
//! let y = 50;
//! if (y > 100) y = 0;
//! console.log(y);
//* Opciones ✍:
//* a) 50
//* b) 100
//* c) 0
//* d) undefined

//! 6. Reemplaza este código con una condición equivalente:
//! if (score >= 50) {
//!     if (score <= 100) {
//!         console.log("Aprobado");
//!     }
//! }
//* Opciones ✍:
//* a) if (score > 100) console.log("Aprobado");
//* b) if (score == 50) console.log("Aprobado");
//* c) if (score >= 50 && score <= 100) console.log("Aprobado");
//* d) if (score != 50) console.log("Aprobado");

//! 7. ¿Qué valores pueden tener las variables para que se ejecute el bloque de código?
//! if (edad >= 18 && esEstudiante == true) {
//!     console.log("Descuento aplicado");
//! }
//* Opciones ✍:
//* a) edad: 17, esEstudiante: true
//* b) edad: 19, esEstudiante: false
//* c) edad: 18, esEstudiante: true
//* d) edad: 16, esEstudiante: false

//! 8. El uso del switch statement es:
//* Opciones ✍:
//* a) Reemplazar ciclos for.
//* b) Ejecutar diferentes bloques de código basados en un valor.
//* c) Convertir valores a booleanos.
//* d) Depurar el programa automáticamente.

//! 9. Reescribe la condición if(saldo === 0) usando un switch:
//* Opciones ✍:
//* a) switch(saldo) { case 0: console.log("Sin saldo") };
//* b) switch(saldo) case 0: console.log("Sin saldo");
//* c) switch(saldo) { case === 0: console.log("Sin saldo") };
//* d) switch(saldo) { 0: console.log("Sin saldo") };

//! 10. ¿Cuál de las siguientes estructuras if...else es incorrecta?
//* Opciones ✍:
//* a) if...else if...else
//* b) if...else...else if
//* c) if...else if...else if
//* d) if...else

//! 11. ¿Cuál no es un bucle en JavaScript?
//* Opciones ✍:
//* a) for...of
//* b) for...in
//* c) while...do
//* d) if...else

//! 12. ¿Qué bucle es adecuado para iterar las propiedades de un objeto?
//* Opciones ✍:
//* a) for...in
//* b) for...of
//* c) while
//* d) do...while

//! 13. Si queremos iterar un array en orden inverso, ¿cuál es la sintaxis correcta?
let dias = ["Lunes", "Martes", "Miércoles"];
//* Opciones ✍:
//* a) for(let i = dias.length - 1; i >= 0; i--) console.log(dias[i]);
//* b) for(let i = 0; i < dias.length; i++) console.log(dias[i]);
//* c) for(let dia of dias) console.log(dia);
//* d) for(let i = dias.length; i > 0; i++) console.log(dias[i]);

//! 14. Analiza este código:
 let b = 20;
 do {
     console.log(b--);
 } while (b > 15);
//! ¿Qué bloque puede reemplazar el do...while?
//* Opciones ✍:
//* a) while (b > 15) console.log(b);
//* b) while (b > 15) console.log(b--);
//* c) while (b < 15) console.log(b);
//* d) while (b >= 15) console.log(b--);

//! 15. ¿Cuántas veces se ejecutará el siguiente bloque de código?
 for (let z = 8; z > 0; z -= 3) {
     console.log("Hola");
 }
//* Opciones ✍:
//* a) 3
//* b) 2
//* c) 4
//* d) 5

//! 16. ¿Qué instrucción mostrará solo dos nombres de un array?
//! let animales = ["loro", "pez", "hamster", "conejo"];
//* Opciones ✍:
//* a) for (let i = 0; i < animales.length; i += 2) console.log(animales[i]);
//* b) for (let n of animales) console.log(n);
//* c) for (let i = 3; i < animales.length; i++) console.log(animales[i]);
//* d) for (let n in animales) console.log(n);

//! 17. Reemplaza el siguiente bucle for con una estructura while equivalente:
//! for (let b = 6; b > 2; b--) {
//!     console.log(b);
//! }
//* Opciones ✍:
//* a) let b = 6; while (b >= 2) console.log(b--);
//* b) let b = 7; while (b > 2) console.log(b--);
//* c) let b = 6; while (b > 2) console.log(b--);
//* d) let b = 3; while (b < 6) console.log(b++);

//! 18. Analiza este código:
//! for (let c = 5; c < 5; c++) {
//!     console.log("Prueba");
//! }
//! ¿Cuántas veces se ejecutará el código?
//* Opciones ✍:
//* a) Ninguna
//* b) 1 vez
//* c) 2 veces
//* d) 5 veces

//! 19. Examina el siguiente código:
//! let coche = {marca: "Ford", modelo: "Mustang"};
//! for (let propiedad in coche) console.log(propiedad);
//* Opciones ✍:
//* a) "marca", "modelo"
//* b) "coche"
//* c) "marca: Ford", "modelo: Mustang"
//* d) "Ford", "Mustang"

//! 20. Examina el siguiente código:
//! let pasos = [4, 3, 2];
//! for (let paso of pasos) console.log(paso);
//* Opciones ✍:
//* a) 4 3 2
//* b) "[4, 3, 2]"
//* c) 2 3 4
//* d) 0 1 2
