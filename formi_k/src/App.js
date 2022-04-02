import { useFormik } from 'formik' // Importamos el hook useForm desde formik

const validate = (values) => {
  const errors = {}
  //Validaciones al campo 'name'
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  //Validaciones al campo lastName
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length < 5) {
    errors.lastName = 'El apellido es muy corto'
  }


  //Validaciones al campo email

  return errors
}

function App() {
  const formik = useFormik({ //Creamos un objeto utilizando el hook 
    initialValues: { //Parámetros de configuración
      name: '', //Propiedad name
      lastName: '', //Propiedad lastName
      email: '' //Propiedad email
      //useformik utiliza preventDefault() de manera automática.
    },
    validate,
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
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Apellido</label>
      <input
        name='lastName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.name ? <div>{formik.errors.lastName}</div> : null}
      <br />
      <label>Email</label>
      <input
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.name ? <div>{formik.errors.email}</div> : null}
      <br />
      <button>Enviar</button>
    </form>
  );
}

export default App;