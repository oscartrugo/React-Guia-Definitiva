const arr = [5,1,2,3,4]

//Filter toma los valores de un arreglo y devuelve los que evaluen a true
const r = arr.filter((el, i) => {
    console.log(i)
    return el > 2
}) //Se usa para filtrar contenido (ejem. lista to-do)
console.log(r) 