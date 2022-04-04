import { Formik, Form, Field, ErrorMessage } from 'formik' // Importamos el hook useForm desde formik
import Checkbox from './components/Checkbox'
import TextInput from './components/TextInput'

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

            <Form> {/**Reemplazamos el form por el componente Form de formik  */}
                <TextInput name='name' label='Nombre' />
                <ErrorMessage name='name'/> {/**Componente ErrorMessage de formik */}
                <br />

                <label>Apellido</label>
                <Field name='lastName' type='text' />
                <ErrorMessage name='lastName'/>
                <br />

                <label>Email</label>
                <Field name='email' type='email' />
                <ErrorMessage name='email'/>
                <br />
                <Checkbox name='accept'>
                    Aceptar términos y condiciones.
                </Checkbox>
                <button>Enviar</button>
            </Form>

        </Formik>
    );
}

export default App;