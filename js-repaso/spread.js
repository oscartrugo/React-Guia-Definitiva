const fn = (a,b,c) => console.log(a + b + c)

const arr = [1,2,3,4]

//fn(arr[0], arr[1], arr[2])
fn(...arr)

//const arr1 = [5,6]

const arr2 = [...arr, 2, 3] //concatenamos ambos arreglos con spread operator (...)
const arr3 = arr
arr[0] = 'chanchito feliz'
console.log(arr, arr2, arr3)