//Funciones que se declaran con la palabra reservada FUNCTION
function Fn(){
    /**
     * El objeto literal tiene una nueva propiedad llamada 'prop' con un valor de 'propiedad'
     */
    this.prop = 'propiedad' //creamos una propiedad en el objeto Fn llamada 'prop'
    //return "chanchito feliz" //Ignora el string y retorna implicitamente el valor de this
}
Fn.prototype.lala = function FunctionDePrototipo(){}
const r = new Fn(); //Asignamos el valor retornado por Fn a la constante 'r'

//console.log(r.__proto__)

/**
 * Las funciones, ademas de ser funciones, tambien son clases en JS, pero son 
 * basadas en prototipos.
 */

//fat arrow function
console.log(this)
const fatFn = () =>{ //NO TIENEN CONTEXTO DE THIS!!, no existe el this dentro de las fat arrrow function
    // const obj = {} //obj es un objeto literal
    // obj.prop = 'propiedad'
    // return obj
    this.prop = 'lala' //el objeto literal pertenece al scope anterior
}

const r1 = fatFn()
console.log(this)
//console.log(r1)

/**
 * DIFERENCIAS ENTRE LAS fat arrow functions con las funciones
 * 1. Las fat arrow function no pueden ser llamadas con las palabras reservadas new, solo las declaradas con function,
 * porque estas tambien funcionan como clases en JS y tienen un contexto de this
 */

//return implicito
//Las funciones fat arrow function que no tengan llaves tienen un return implicito
const fnR = () => 2

console.log(fnR())