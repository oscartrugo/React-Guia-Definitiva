const url = 'https://jsonplaceholder.typicode.com/users'

    // .then((response) => response.json())
    // .then(data => console.log(data))

const fn = async () => {
    const response = await fetch(url, {
        method: 'POST', ///GET, POST, PUT, PATCH, DELETE
        headers: {
            'Content-Type': 'application/json', //Le decimos al servidor que el contenido que le estamos enviando es de tipo JSON
            'Authorization': 'Bearer token' //Aqui se incluye un token de autorizacion
        },
        body: JSON.stringify({
            name: 'Chanchito feliz',
            website: 'google.com'
        }) //Transformamos todo lo que enviemos al servidor en un string
    })

    const data = await response.json();
    console.log(data)
}

fn()