import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useState } from "react";
import Swal from 'sweetalert2'

const LoginForm = () => {
  //para poder controlar los inputs necesitamos un useState
  const [inputs, setInputs] = useState({
    email: '',
    password:''
  });

  // //desestructuramos a inputs
  // const { email, password} = inputs

  const handleInputs = (e) => {
    const { target } = e;
    setInputs({ ...inputs, [target.name]: target.value });
  };

//funcion manejadora
  const handleSubmit =  (e) =>{
    e.preventDefault()
//     if(!email || !password){
      Swal.fire(
        'Error!',
        'Funcionando',
        'error'
      )
//     } else {
//       const result = await userSignIn( inputs )
//       if(result.message) {
//         Swal.fire('Error', result.message , 'error')
//       } else {
//   //       //obtenemos el token y lo agregamos a una variable de almacenamiento local
//         localStorage.setItem('accessToken', result.accessToken)
//         Swal.fire('Success', 'Bienvenido' , 'success')
       
//   //       //regresamos al usuario a la pagina index despues de 3 segundos
//         setTimeout(() => {
//           window.location.href = '/'
//         }, 1800);

//       }
//     }
  }



  return (
    <> 
    <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="form-demo">
        <div className="flex justiify-content-center">
          
          <div className="card">
          <h1 style={{textAling:"center"}}>LoginForm</h1>
            <form className="p-fluid" onSubmit={handleSubmit}>
              <div className="field">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-at"></i>
                  </span>
                  <InputText type='text' name="email" placeholder="Email" value={inputs.email} onChange={ handleInputs} />
                </div>
              </div>
              <div className="field">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-lock"></i>
                    </span>
                    <InputText type='password' name="password" placeholder="Password" value={inputs.password} onChange={ handleInputs}  />
                  
                </div>
              </div>
              <div className="col-4 md:col-4">
              <Button label="Ingresa" icon="pi pi-check" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
