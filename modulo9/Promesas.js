
console.log('mensaje1');
console.log('mensaje2');
console.log('mensaje3');

setTimeout(() => {
    console.log('mensaje 4');
}, 2000);
console.log('mensaje 5');

//syntax
const promise=new Promise((resolve,reject)=>{
    resolve('satisfactorio')
    reject('falló')
})

const doPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const skills=[]
        if (skills.length>0) {
            resolve(skills)
        } else {
            reject('Hubo un problema')
        }
    },2000)
})

doPromise
.then(result=> console.log(result))
.catch(error=> console.log(error))

const url='https://restcountries.com/v2/all'

fetch(url)
.then(respuesta=> respuesta.json())
.then(data=>console.log(data))
.catch(error=> console.error(error))

const url1='https://restcountries.com/v2/all'

const fetchData=async () => {
    try {
        const response= await fetch(url1)
        const countries= await response.json()
        console.log(countries);
    } catch (error) {
            console.error(error)        
    }
}
console.log('async and await----------------');
fetchData()













