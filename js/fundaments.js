// By default all variables are defined as global

// So if you want to use a local variable use 'var'

let suma = 0

function sumar(a, b) {
   // Se declara como variable local
   var suma = a + b
   // por ello esta variable solo eciste en este contexto
   return suma
}

console.log(sumar(5,6))
console.log(suma)

// En este caso se altera la variable global
function sumarAlt(a, b) {
   suma = a + b
}

sumarAlt(10, 20)
console.log(suma + "\n")

class Persona {

   personas = 0

   constructor(nombre, identificacion, correo, telefono) {
      this.nombre = nombre
      this.identificacion = identificacion
      this.correo = correo
      this.telefono = telefono
   }
   
}

// Defining an objeto in JSON
personas = [
   new Persona(
      "Valentin Osorio",
      1007290916,
      "dosoriom@unal.edu.co",
      3137865160
      ),
   new Persona(
      "Ana Maria Torres",
      1007243312,
      "torresramosanamaria@gmail.com",
      3245773247
      )
   ]

// Iterando el arreglo anterior
// Usando for of para iterar listas
for (const persona of personas) {
   console.log(persona)
   console.log(persona["name"] + ' = ' + persona['identification'])
}

console.log('\n')

// Otra forma
// Recorrer un arreglo de objetos e iterar sobre sus atributos y valores
personas.forEach((persona, index) => {
   console.log(persona)
   console.log(`Se encuentra el la posición ${index} del arreglo`)
   // Se utiliza el for in para iterar en los atrubutos de objetos
   // for (const atributo in persona) {
   //    console.log(atributo + ' = ' + persona[atributo])
   // }
   Object.keys(persona).forEach(atributo => {
      console.log(atributo + ' = ' + persona[atributo])
   })
});

// Object oriented programming
// Como crear clases en JavaScript

class Vehiculo {
   // Creamos el consutructor
   constructor(marca = "Default", kilometraje = 0) {
      this.marca = marca
      this.kilometraje = kilometraje
   }
   // Método de instancia
   avanzar() {
      this.kilometraje++
      console.log("Kilometraje: " + this.kilometraje)
   }
   // Método de clase
   static fusion(carro1, carro2) {
      return (carro1.marca + ' ' + carro2.marca)
   }
}

// Instanciando clases
carro1 = new Vehiculo("Renault")
carro2 = new Vehiculo("Clio")

console.log(carro1.marca)
carro1.avanzar()
carro1.avanzar()
carro1.avanzar()
console.log(Vehiculo.fusion(carro1, carro2))
