/**
 * Una EXPRESION DE CLASE es cuando nosotros estamos definiendo una clase y 
 * al mismo tiempo se la asignamos a una constante. 
 */
// const Rectangulo = class {

// }
//Este tipo de declaracion de clase (clases declaradas con class) no puede tener Hoisting
class Rectangulo { //DECLARACION DE CLASE

}
/**
 * Al tipo de comportamiento del compilador cuando a las variables declaradas con 'var' y las funciones
 * declaradas con 'function' en el que las declara al inicio del archivo se le conoce como HOISTING.
 * Esto es cuando tomamos variables definidas con VAR y funciones definidas con FUNCTION y las lleva
 * al comienzo del archivo. 
 * 
 */
//console.log(Cuadrado)
//function Cuadrado(){}
//console.log(Cuadrado, Rectangulo)

//const r = new Rectangulo()

class Chancho {
    propiedad = 'mi propiedad'
    #hambre//propiedad privada definida por #
    static estatico = 42
    constructor(estado = 'feliz', hambre = false) {//Metodo generado siempre que instanciemos la clase
        this.estado = estado
        this.#hambre = hambre
    }

    hablar() {
        console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho!'}`)


    }

    //Metodo estatico = metodo que solo se puede acceder a traves de la clase y no necesita una nueva instancia
    static comer() {
        console.log(this.estatico, 'Estoy comiendo!')//Los metodos estaticos dentro de las clases no pueden
                                                      //acceder a las propiedades de una clase. Las propiedades
                                                      //pertenecen a las instancias y no a los metodos
    }
}

Chancho.comer()
const feliz = new Chancho('llamado Oscar') //No podemos declarar una instancia de una clase sin utilizar la palabra reservada 'new'
//console.log(feliz.__proto__.hablar)
// feliz.hablar()
// console.log(feliz)
const triste = new Chancho('triste')
// triste.hablar()
const vacio = new Chancho()
// vacio.hablar()