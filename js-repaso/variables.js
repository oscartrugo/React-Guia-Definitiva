var miVariable
miVariable = 'otro valor'

let variable = 'variable creada con let'
console.log(variable)
variable = 'otro valor a let'

const constante = 'este valor es una constante'

//console.log(miVariable, variable)

/**
 * 
 * Las variables 'let' solo son accesibles despues de haber sido declaradas
 * 
 * El comportamiento de var, se llama Hoisting. en el caso de let y const se van al Temporal Dead Zone,
 * básicamente algo que no permite utilizar el valor sin declarar
 */