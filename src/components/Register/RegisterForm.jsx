import { userSignUp } from "api/userApi";
import { useState } from "react";
import InputRegister from "./InputRegister";
import { Button } from 'primereact/button';
import Swal from 'sweetalert2'

const RegisterForm = () => {
  
  //useState que va a manejar los valores de todos los inputs del formulario
  const [ inputs, setInputs ] = useState( { 
    firstname:'',
    lastname:'',
    email: '',
    password:'',
  } )

  // desestructuracion del objeto inputs
  const { firstname, lastname, email, password } = inputs

  //funcion que maneja los cambios de valores de los inputs
  const handleInputsForm = ( e ) => {
      setInputs( { ...inputs, [e.target.name]: e.target.value } )
      // console.log( inputs );
  }
  
  //funcion handle para las pruebas del boton Enviar
  const handleEnviar = async ( e ) => {
    e.preventDefault();  //con esto evitamos que los formularios se reinicien
    
    //ToDo: Envio de los datos al API Rest
    
    if( !lastname || !firstname || !email || !password) {
      alert('Todos los campos son requeridos')
    
    }else{
      const result = await userSignUp(inputs)
      if(result.status === 200){
        Swal.fire(
          'Success',
          result.message,
          'success'
        ).then(result => {
          if(result.isConfirmed){
            window.location.href='/'
          }else{
            // limpiar formulario
            setInputs({
              firstname:'',
              lastname:'',
              email:'',
              password:''
            })
          }
        })  
      }else{
        Swal.fire(
          'Warning',
          result.message,
          'warning'
        )      
      }
    }


    // alert(`Su fullname es: ${inputs.firstname} ${inputs.lastname}, correo ${inputs.email}, password: ${inputs.password}`);

    
  };

  return (
    <>
    <br>
    </br>
      <div className="cuerpore">  
        <div className="card card-form">
          <h2>Registrate</h2>

          {/* inicio del formulario de registro */}
          <form action="" onSubmit = { handleEnviar }>
            <InputRegister title='Nombres:' name='firstname' type='text' value={inputs.firstname} handle={handleInputsForm}/>
            <InputRegister title='Apellidos:' type='text' name='lastname' value={inputs.lastname} handle={handleInputsForm}/>
            <InputRegister title='Email:' type='email' name='email' value={inputs.email} handle={handleInputsForm}/>
            <InputRegister title='Password:' type='password' name='password' value={inputs.password} handle={handleInputsForm}/>
            
            
            <Button label="Registrarme" icon="pi pi-check" />
          </form>
          {/* fin del formulario de registro */}
        </div>
      </div>  
    </>
  );
};

export default RegisterForm;
