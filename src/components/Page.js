import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import RegisterForm from '../components/Register/RegisterForm'
import LoginForm from "./Login/LoginForm";

export default function Page() {
  return (
    <section className="registrope">
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path='/register' exact component={RegisterForm}/> 
        <Route path='/login' exact component={LoginForm}/>
        
			</Switch>
    </section>
  );
}
// AQUI VAN LAS RUTAS PARA LOS LINKS