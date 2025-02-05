//! Programación funcional
// En lugar de escribir un bucle normal, 
// la última versión de JavaScript introdujo muchos métodos 
// integrados que pueden ayudarnos a resolver problemas complicados. 
// Todos los métodos integrados aceptan funciones de devolución de llamada. 
// En esta sección, veremos forEach , map , filter , reduce , find , every , some y sort .

//! forEach
let sum=0 // acumulador
const numbers=[1,2,3,4,5]
numbers.forEach(num=> sum+=num)
console.log(sum);

const paises=['Peru','Bolivia','Argentina','Colombia']
paises.forEach(pais=>console.log(pais.toUpperCase()))

//! map

const numbersM=[1,2,3,4,5]
const numersSquare= numbersM.map(num=>num*num)
console.log(numersSquare);
console.log(numbersM);

const paisesM=['Peru','Bolivia','Argentina','Colombia']
let paisesConTresLetras= paisesM.map(pais=>pais.toUpperCase().slice(0,3))
console.log(paisesConTresLetras);
//! filter filtro
const paisesContienenLetraI= paisesM.filter(pais=>pais.includes('l'))
console.log(paisesContienenLetraI);

const notas=[
    {name:'Ricardo', score:95},
    {name:'Martha', score:98},
    {name:'Cecilia', score:80},
    {name:'Juana', score:50},
    {name:'Juan', score:85},
    {name:'Luis', score:100},
]

const notasMayoresOchenta= notas.filter(nota=>nota.score > 80)
console.log(notasMayoresOchenta);

//! reduce
const sumR= numbersR.reduce((sum,num)=> sum+num,0)
console.log(sumR);
const numbersR=[1,2,3,4,5] //15
const mulR= numbersR.reduce((mult,num)=> mult*num,1)
console.log(mulR);





