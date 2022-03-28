const arr = [5,1,2,3,4]

//Filter toma los valores de un arreglo y devuelve los que evaluen a true
const r = arr.filter((el, i) => {
   // console.log(i)
    return el > 2
}) //Se usa para filtrar contenido (ejem. lista to-do)
//console.log(r) 

//Map toma todos los elementos dentro de un arreglo y les aplica una funcion
//Finalmente devuelve un arreglo de la misma longitud pero con una funcion aplicada a cada elemento

// const mapped = arr.map((el) => `<h1>${el}</h1>`) //Multiplica cada elemento por 2
// console.log(mapped) //Imprime el nuevo arreglo con los elementos nuevos

const users = [
    {id: 1, name: 'Chanchito feliz'},
    {id: 2, name: 'Chanchito triste'},
    {id: 3, name: 'Chanchito emocionado'},
    {id: 4, name: 'Felipe'}
]

const mapped = users.map((user) => `<h1>${user.name}</h1>`)
console.log(mapped)