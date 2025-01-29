//!POO
//! Sintaxis de la clase
class ClassName{
    // aca viene el codigo
}
class MoldeGalletas{
    // aca viene el codigo
 }
//! Instanciacion de clase 
const galleta1= new MoldeGalletas() 
console.log(galleta1);
//! Constructor de clase 
class Persona {
    constructor(name,apellido,edad,pais,ciudad) {
        this.nombre=name
        this.apellido=apellido
        this.edad=edad
        this.pais=pais
        this.ciudad=ciudad
    }
}
const persona1=new Persona('Juan','Ramirez',35,'Peru','Lima')
console.log(persona1);
//! Valores predeterminadas con costructor

class Persona {
    constructor(
        name='Rosario',
        apellido='Ramirez',
        edad=34,
        pais='Bolivia',
        ciudad='La Paz') {
        this.nombre=name
        this.apellido=apellido
        this.edad=edad
        this.pais=pais
        this.ciudad=ciudad
    }
}
const persona2=new Persona()
const persona3=new Persona('Adela','Gutierrez',45)
console.log(persona2);
console.log(persona3);
//!Métodos de clase
class Persona {
    constructor(
        name='Rosario',
        apellido='Ramirez',
        edad=34,
        pais='Bolivia',
        ciudad='La Paz') {
            this.nombre=name
            this.apellido=apellido
            this.edad=edad
            this.pais=pais
            this.ciudad=ciudad
        }
        obtenerNombreCompleto(){
            const nombreCompleto=this.nombre + ' ' + this.apellido
            return nombreCompleto
        }
    }
    const persona4=new Persona('Adela','Gutierrez',45,'Peru','Lima')
    const persona5=new Persona('Ariel','Gutierrez',34,'Bolivia','Cochabamba')
    console.log(persona4.obtenerNombreCompleto());
    console.log(persona5.obtenerNombreCompleto());
    //!Propiedades con valor inicial
    class Persona {
        constructor(
            name='Rosario',
            apellido='Ramirez',
            edad=34,
            pais='Bolivia',
            ciudad='La Paz') {
                this.nombre=name
                this.apellido=apellido
                this.edad=edad
                this.pais=pais
                this.ciudad=ciudad
                this.puntuacion=0
                this.habilidades=[]
            }
            obtenerNombreCompleto(){
                const nombreCompleto=this.nombre + ' ' + this.apellido
                return nombreCompleto
            }
        }
        const persona6=new Persona('Juan','Gutierrez',45,'Peru','Lima')
        console.log(persona6.puntuacion);
        console.log(persona6.habilidades);
        
        //!Método Get
        class Persona {
            constructor(
                name='Rosario',
                apellido='Ramirez',
                edad=34,
                pais='Bolivia',
                ciudad='La Paz') {
                    this.nombre=name
                    this.apellido=apellido
                    this.edad=edad
                    this.pais=pais
                    this.ciudad=ciudad
                    this.puntuacion=0
                    this.habilidades=[]
                }
                obtenerNombreCompleto(){
                    const nombreCompleto=this.nombre + ' ' + this.apellido
                    return nombreCompleto
                }
                get obtenerPuntuacion(){
                    return this.puntuacion
                }
                get obtenerHabilidades(){
                    return this.habilidades
                }
            }
 const persona7=new Persona('Juana','Gutierrez',34,'Peru','Lima')
 console.log(persona7.obtenerPuntuacion);
 console.log(persona7.obtenerHabilidades);
 //!Método set
 class Persona {
     constructor(
         name='Rosario',
         apellido='Ramirez',
         edad=34,
         pais='Bolivia',
         ciudad='La Paz') {
             this.nombre=name
             this.apellido=apellido
             this.edad=edad
             this.pais=pais
             this.ciudad=ciudad
             this.puntuacion=0
             this.habilidades=[]
         }
         obtenerNombreCompleto(){
             const nombreCompleto=this.nombre + ' ' + this.apellido
             return nombreCompleto
         }
         get obtenerPuntuacion(){
             return this.puntuacion
         }
         get obtenerHabilidades(){
             return this.habilidades
         }
         set actualizarPuntuacion(puntuacion){
            this.puntuacion = this.puntuacion+puntuacion
         }
         set actualizarHabilidades(habilidad){
            this.habilidades.push(habilidad)
         }
     }
     const persona8=new Persona('Roberto','Gutierrez',34,'Peru','Lima')
     persona8.actualizarPuntuacion=1
persona8.actualizarHabilidades='HTML'
persona8.actualizarHabilidades='JavaScript'
persona8.actualizarHabilidades='CSS'
persona8.actualizarHabilidades='React'
console.log(persona8.obtenerPuntuacion);
console.log(persona8.obtenerHabilidades);

//! Herencia

//? sintaxis
class ChildClassName extends ParentClassName{
    // aca viene el codigo
}

class Persona {
        constructor(
            name='Rosario',
            apellido='Ramirez',
            edad=34,
            pais='Bolivia',
            ciudad='La Paz') {
                this.nombre=name
                this.apellido=apellido
                this.edad=edad
                this.pais=pais
                this.ciudad=ciudad
                this.puntuacion=0
                this.habilidades=[]
            }
            obtenerNombreCompleto(){
                const nombreCompleto=this.nombre + ' ' + this.apellido
                return nombreCompleto
            }
            get obtenerPuntuacion(){
                return this.puntuacion
            }
            get obtenerHabilidades(){
                return this.habilidades
            }
            set actualizarPuntuacion(puntuacion){
               this.puntuacion = this.puntuacion+puntuacion
            }
            set actualizarHabilidades(habilidad){
               this.habilidades.push(habilidad)
            }
        }

class Estudiante extends Persona {
    decirAlgo(){
        console.log('Hola a todos soy un hijo de la clase persona');
    }

}
const estudiante1= new Estudiante('Ximena','Ramirez',24)
console.log(estudiante1);
estudiante1.decirAlgo();



            
            