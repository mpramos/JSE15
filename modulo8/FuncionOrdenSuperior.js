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
//! every
const names=['Fernando','Susana','Patricia','Juana',3]
const areAllStr=names.every(name=> typeof name === 'string')
console.log(areAllStr);

//! find
const ages=[24,22,25,35,18,19]
const age=ages.find(age=> age<20)
console.log(age);
const namesFind=['Fernando','Susana','Patricia','Juana',3]
const result=namesFind.find(name=> name.length>7)
console.log(result);

const scores=[
    {name:'Fernanda', score:95},
    {name:'Juan', score:80},
    {name:'Ricardo', score:50},
    {name:'Lorena', score:85},
    {name:'Sebastian', score:100},
]

let score= scores.find(user=> user.score >80)
console.log(score);
//! findIndex
const namesFindIndex=['Susana','Patricia','Juana','Fernando']
const resultFI=namesFindIndex.findIndex(name=> name.length>7)
console.log(resultFI);
//! some
const bools=[false,false,false,false, false]

let areSomeTrue= bools.some(b=> b ===true)
console.log(areSomeTrue);
const namesSome=['Susana','Patricia','Juana','Fernando','Adela']
console.log(namesSome.sort());

let areAllString= namesSome.some(name=>typeof name ==='number')
console.log(areAllString);
//! sort
const numbersS=[10,4,1,9,8]
console.log(numbersS.sort((a,b)=>a-b));
console.log(numbersS.sort((a,b)=>b-a));

const users=[
    {name:'Fernanda', age:95},
    {name:'Juan', age:22},
    {name:'Ricardo', age:50},
    {name:'Lorena', age:30},
    {name:'Sebastian', age:55}
]
console.log(users.sort((a,b)=> a.age-b.age));
