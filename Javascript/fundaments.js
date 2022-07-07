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

// Defining an objeto in JSON

personas = [{name: "Valentin", identification: "1007290916"},
            {name: "Ana", identification: "1007243312"}
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
   for (const atributo in persona) {
      console.log(atributo + ' = ' + persona[atributo])
   }
});