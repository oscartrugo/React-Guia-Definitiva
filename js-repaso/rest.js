const rest = (a, b, ...argumentos) => { //El rest operator siempre tiene que ser el ultimo parametro que se defina
    console.log(a, b)
    console.log(argumentos)
}

///rest(1,2,3, 4, 5, 6)

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

//const{a, b, ...restobj} = obj //Hacemos destructuring al objeto obteniendo el valor de 'a'
//console.log(a, b, restobj) //Imprimimos 'b'

const arr = [1,2,3,4,5]
const [a,b,...r] = arr //r es un nuevo arreglo con los valores restantes de arr
console.log(a,b,r)

const useState = () => ['valor', () => {}] 

const [valor, setValor] = useState()
console.log(valor, setValor)

