import { useFormik } from 'formik' // Importamos el hook useForm desde formik

function App() {
  const formik = useFormik({ //Creamos un objeto utilizando el hook 
    initialValues: { //Parámetros de configuración
      name: '', //Propiedad name
      lastName: '', //Propiedad lastName
      email: '' //Propiedad email
    },
    onSubmit: values => console.log(values) //Le pasamos a la constante una función que recibe los valores del formulario
  })
  return (
    <form onSubmit={formik.handleSubmit}> {/**Le pasamos al form la propiedad onSubmit manejada por el objeto formik  */}
      <label>Nombre</label>
      <input
        name='name'
        type='text'
        onChange={formik.handleChange} /**Le pasamos al input la propiedad onChange manejado por el objeto formik utilizando la funcion handleChange dentro de formik*/
        value={formik.values.name}
      />
      <label>Apellido</label>
      <input
        name='lastName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label>Email</label>
      <input
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button>Enviar</button>
    </form>
  );
}

export default App;