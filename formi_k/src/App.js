import { Formik, Form, Field, ErrorMessage } from 'formik' // Importamos el hook useForm desde formik
import Radio from './components/Radio'
import TextInput from './components/TextInput'
import Select from './components/Select'
import Checkbox from './components/Checkbox'

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

    //Validaciones al button Radio
    if(!values.radio){
        errors.radio = 'Requerido'
    }

    return errors
}

function App() {
    return (
        <Formik
            initialValues={{ name: '', lastName: '', email: '', chancho: '', radio: ''}}
            validate={validate}
            onSubmit={values => console.log(values)}
        >

            <Form> {/**Reemplazamos el form por el componente Form de formik  */}
                <TextInput name='name' label='Nombre' />
                <br />

                <TextInput name='lastName' label='Apellido' />
                <br />

                <TextInput name='email' label='Correo' />
                <br />
                <Select label='Tipo de chancho' name='chancho'>
                    <option value=''>-- Seleccione chancho --</option>
                    <option value='felipe'>Felipe</option>
                    <option value='chanchitofeliz'>Chanchito Feliz</option>
                    <option value='chanchitotriste'>Chanchito Triste</option>
                </Select>
                <Checkbox name='accept'>
                    Aceptar términos y condiciones.
                </Checkbox>
                <Radio name='radio' value='chanchito1' label='chanchito1'/>
                <Radio name='radio' value='chanchito2' label='chanchito2'/>
                <Radio name='radio' value='chanchito3' label='chanchito3'/>
                <ErrorMessage name='radio'/>
                <button>Enviar</button>
            </Form>

        </Formik>
    );
}

export default App;