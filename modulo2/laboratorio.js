// Usando los mismos datos que en el laboratorio anterior, cree la lista de contactos como una matriz, 
// cada elemento de la cual será un objeto que describe a un solo usuario. Por lo tanto, debemos 
// obtener una matriz de tres elementos, y cada objeto colocado en ella contendrá tres piezas de 
// información (nombre, teléfono y correo electrónico).

// Al final de la lista declarada de esta manera, agregue un nuevo contacto utilizando el método de matriz
//  apropiado. El nuevo contacto es: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

// Muestre el primer y el último contacto, nuevamente en el formato:
//  nombre / teléfono / correo electrónico. Utilice la propiedad length de la matriz para determinar el 
// índice del último elemento. Recuerde que los elementos de la matriz se indexan a partir de 0.

let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    },
     {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    },
];
// {
//  name:   'Maisie Haley',
//  phone: '0913 531 3030',
//  email: 'risus.Quisque@urna.ca.'
// }

//todo tarea 1 Agregar un nuevo contacto ✔
// a) number
// b) string
// c) objeto ✔
// let frutas=['🍇','🍎','🍏','🍉','🍊'] //0 //1  //4-1=3
// console.log(frutas[0]);
// console.log(frutas.length);
// console.log(frutas[frutas.length-1]);
// console.log(frutas);
// frutas.push('🍊')
// frutas.push(1)
// console.log(frutas);

let nuevoContacto={
      name:  'Maisie Haley',
      phone: '0913 531 3030',
      email: 'risus.Quisque@urna.ca.'
     }
contacts.push(nuevoContacto)   
// console.log(contacts);
//todo tarea 2 Mostrar el primer y último contacto con el formato que corresponda 
//todo  nombre / teléfono / correo electrónico ✔
let suma=3+4
// console.log(`La respuesta de la suma de 2 + 3 = ${suma}`);
// console.log('La respuesta de la suma de 2 + 3 = '+ suma);
// Mostrar el primer contacto ✔
console.log('PRIMER CONTACTO');

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log('ULTIMO CONTACTO');
// Mostrar el ultimo contacto
console.log(`${contacts[contacts.length-1].name} / ${contacts[contacts.length-1].phone} / ${contacts[contacts.length-1].email}`);


