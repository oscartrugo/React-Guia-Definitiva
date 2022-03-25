// const chanchos = require('./importexport')

// console.log(chanchos) //Objeto que contiene ambos grupos de chanchos (Felices y Tristes)
import chanchos, { chanchosTristes, otrosChanchos, fn1, fn2} from './importexport.mjs' //NO PODEMOS USAR import FUERA DE UN MODULO

console.log(chanchos)
console.log(chanchosTristes)
console.log(otrosChanchos)
fn1()
fn2()