let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, 
{
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
},
{
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, 
{
    name: "Adela Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, 
];

let sortByName=(lista)=>{
   return lista.sort(function (a,b) {
    if (a.name < b.name) {
        return -1 //'a viene antes q b'
    }
    if (a.name>b.name) {
        return 1 // 'b' viene antes que a
    }
    return 0
   })
}
// console.log( sortByName(contacts));
let sortByPhone=(lista)=>{
    return lista.sort((a,b)=>a.phone-b.phone)
}
// console.log(sortByPhone(contacts));
let sortByEmail=(lista)=>{
    return lista.sort((a,b)=>{
        if (a.email < b.email) {
            return -1
        }
        if (a.email > b.email) {
            return 1
        }
        return 0
    })
}
console.log(sortByEmail(contacts));
