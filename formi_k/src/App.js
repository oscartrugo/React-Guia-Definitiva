import { Formik } from 'formik' // Importamos el hook useForm desde formik

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
    if (!values.email) {
        errors.email = 'Required'
    } else if (values.email.length < 5) {
        errors.email = 'El email es muy corto'
    }

    return errors
}

function App() {
    return (
        <Formik
            initialValues={{ name: '', lastName: '', email: '', }}
            validate={validate}
            onSubmit={values => console.log(values)}
        >

            {formik => //Definimos formik
                <form onSubmit={formik.handleSubmit}> {/**Le pasamos al form la propiedad onSubmit manejada por el objeto formik  */}
                    <label>Nombre</label>
                    <input type='text' {...formik.getFieldProps('name')} />  {/** La funcion getFieldProps trae todas las propiedades onchange, onblur y value */}
                    {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    <br />

                    <label>Apellido</label>
                    <input type='text' {...formik.getFieldProps('lastName')} />
                    {formik.touched.lastName && formik.errors.name ? <div>{formik.errors.lastName}</div> : null}
                    <br />

                    <label>Email</label>
                    <input type='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <br />
                    <button>Enviar</button>
                </form>

            }

        </Formik>
    );
}

export default App;