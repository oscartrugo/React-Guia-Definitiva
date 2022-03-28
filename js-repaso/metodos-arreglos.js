const arr = [-5,-1,-2,-3,-4]

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
//console.log(mapped)

//Reduce toma todos los elementos de un arreglo y podemos devolver lo que queramos
//Sumar los elementos del arreglo, un string, promesas en secuencia, eliminar duplicados, etc.
// const getMax = (a, b) => Math.max(a,b)
// const r1 = arr.reduce(getMax) //suma el acumulador + el elemento, inicializa acc = 0
// const r1 = users.reduce((acc, el) => 
//     `${acc === '' ? '' : `${acc}, `}${el.name}`, '') //Obtiene los nombres de toods los usuarios

const r1 = users.reduce((acc, el) => { //Filtramos los usuarios por id
    if(el.id < 2){ //Si el id es menor a 2
        return acc //Retorna acumulador 
    }
        return acc.concat(el) //Si es mayor a 2, al acumulador concatena el elemento actual
    }, [])
console.log(r1)