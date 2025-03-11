//! Spread Operator 
//! Operador de Propagacion

const nums=[1,2,3,4,5,6,7,8,9,10]
let [num1,num2,num3,...rest]= nums
console.log(rest);
const evens=[0,2,4,6,8,10]
// const copieEvens=evens
// console.log(copieEvens);
// copieEvens.push(12)
// console.log(copieEvens);
// console.log('ORIGINAL');
// console.log(evens);
// console.log('ORIGINAL');
// console.log(evens);
const evensNumbers=[...evens]
console.log(evensNumbers);
evensNumbers.push(12)
console.log(evensNumbers);
console.log('ORIGINAL');
console.log(evens);
const odds=[1,3,5,7,9]
const oddsNumbers=[1,3,5,7,9]
let al='abc'
let b=al
console.log(al);

const frontend=['HTML','CSS','JS','React']
const backend=['Node','Express','MongoDB']

const fullstack= [...frontend,...backend]
console.log(fullstack);

const user={
    name:'Juan',
    title:'Programmer',
    country:'Peru',
    city:'Lima'
}
const copiedUser={...user,phone:'2323423432'}
console.log(copiedUser);
console.log('original-----');
console.log(user);

const sumAllNums=(...args)=>{
    let sum=0
    for (const num of args) {
        sum += num //3
    }
    return sum
}

console.log(sumAllNums(1,2,3,4,5,6,7,8,9,10));