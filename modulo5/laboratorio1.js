let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

//todo Mostrar el contacto pasando dos argumentos: la lista y el indice
let showContact=(contacts,indice)=>{
    if (contacts instanceof  Array) {
        console.log(`${contacts[indice].name} /${contacts[indice].phone}/ ${contacts[indice].email}`);
    }else {
        console.log('Dato incorrecto, ingrese un arreglo');
    }
}
// showContact(contacts,1)
// showContact(3,2)
//todo Mostrar todos los contactos pasando un argumento : la lista
let showAllContacts=(lista)=>{
        lista.forEach(contact => {
            console.log(`${contact.name}/ ${contact.phone} / ${contact.email} `);
        });    
}
// showAllContacts(contacts)
//todo Agregar un nuevo contacto pasando cuatro argumentos, la lista, el name,phone,email
let addNewContact=(lista, name, phone, email)=>{
    if (lista instanceof Array && name && phone && email) {
        let newContact={
            name:name,
            phone:phone,
            email:email
        }
        lista.push(newContact)
        console.log('Contacto agregado correctamente');
        
    } else {
        console.log('parametros invalidos, vuelva a enviar los datos');
    }
}
addNewContact(contacts,'juana',7868,'juana@gmail.com')
showAllContacts(contacts)