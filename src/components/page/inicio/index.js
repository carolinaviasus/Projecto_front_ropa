import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/">
            {/* <h1></h1> */}
            </Link>
            <div> Somos creadores textiles en Colombia</div>
            <Link to="/productos">
            <h1>Nuestros Productos</h1>
            </Link>
            <img src={Portada} alt=""/>
            <div>
                Nuestra compañia esta al servicio de todas las personas.
                Puedes contactarnos en:
            </div>
        </div>
    )
}
