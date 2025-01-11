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
// PEDIR AL USUARIO NOMBRE DEL CONTACTO
  let nombreContacto= prompt('Ingrese el nombre del nuevo contacto')
  console.log(nombreContacto);
  
  // PEDIR AL USUARIO TELEFONO DEL CONTACTO
  let telefonoContacto= prompt('Ingrese el telefono del nuevo contacto')
  console.log(telefonoContacto);
  // PEDIR AL USUARIO CORREO DEL CONTACTO
  let emailContacto= prompt('Ingrese el email del nuevo contacto')
  console.log(emailContacto); //✔

  // Agregar el nuevo contacto a la lista
  let nuevoContacto={
    name: nombreContacto ,
      phone: telefonoContacto ,
      email: emailContacto
  }
  contacts.push(nuevoContacto)
  console.log(contacts);
  
 


