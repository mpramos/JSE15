//!  La desestructuración es una forma de descomprimir arreglos y objetos y asignarlos a una variable distinta.

//? Desestructuración de los arreglos

const numbers=[1,2,3]
let [uno,dos,tres] = numbers
function sumar(numero1,numero2) {
    console.log(numero1+numero2);
    
}
sumar(uno, tres)

// let dos=numbers[1]
// let tres= numbers[2]
// console.log(dos);
// console.log(tres);
// console.log(numbers);

const nombres=['Maria','Ana','Sebastian','Juan']
let[primeraPersona, segundaPersona, terceraPersona, cuartaPersona]= nombres

console.log(primeraPersona);
console.log(segundaPersona);
console.log(terceraPersona);
console.log(cuartaPersona);

const fullstack=[
    ['HTML','CSS','JS','React'],['Node','Express','MongoDB'],['Java','Spring Boot']
]
// console.log(fullstack[0][0]);
let [frontend,backend,backendDos] = fullstack
console.log(frontend);
console.log(backend);
console.log(backendDos);
let [html,css,js,react]= frontend
console.log(html);
console.log(css);

const names=['Maria','Juana','Cecilia','Juan']
let[,segundPersona,,cuartPersona]=names
console.log(segundPersona);
console.log(cuartPersona);

const names1=[undefined, 'Juan','David']
let [
    primerPerson='Juana',
    segundaPerson,
    terceraPerson,
    cuartaPerson ='Mario'
] = names1
console.log(names1);

console.log(primerPerson);
console.log(segundaPerson);
console.log(terceraPerson);
console.log(cuartaPerson);

const nums=[1,2,3,4,5,6,7,8,9,10]

let [num1,num2,num3,...rest]=nums
console.log(num1);
console.log(num2);
console.log(num3);
console.log(rest);
let [cuatro,cinco]=rest
console.log(cuatro,cinco);

const paises=[['Peru','Lima'],['Argentina','Buenos Aires'],['Bolivia','Cochabamba']]

for (const [pais,ciudad] of paises) {
    console.log(`PAIS: ${pais} => CIUDAD: ${ciudad}`)
}

//!DESESTRUCTURACION EN OBJETOS
const rectangulo={
    ancho:20,
    alto:10,
    area:200
}

let {alto:h,ancho:w,area:a, perimetro:p=60}=rectangulo
console.log(h); //10
console.log(w); //20
console.log(a); //200
console.log(p);

console.log(rectangulo);

const rect={
    ancho:20,
    alto:10
}

//? Sin desestructuracion
const calcularPerimetro=(rect)=>{
    return 2 * (rect.ancho + rect.alto)
}
console.log(calcularPerimetro(rect));
//? Con la desestructuracion
const calcularPerimetroDeses=({ancho:w,alto:h})=>{
    return 2* (w+h)
}
console.log(calcularPerimetroDeses(rect));

const todoList=[
  {
    task:'Prepare JS Test',
    time:'2/2/2025 20:00',
    completed:true
  },
  {
    task:'Review JS Test',
    time:'4/2/2025 20:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'5/2/2025 20:00',
    completed:false
  },
]
for (const {task,time,completed} of todoList) {
    console.log(` Tarea : ${task} / Time : ${time} / Completado :${completed} `)
}









































