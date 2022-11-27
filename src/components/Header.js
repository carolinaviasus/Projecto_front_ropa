import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Fotof from "images/logoe.png";


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      

      <Link to="/">  
      <div className="logo">
        <img src={Fotof} alt="logomarca" width="180" />
      </div>
      </Link>

      <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/productos">Nuestros PRODUCTOS</Link>
        </li>
      </ul>

      <ul>
        <li >
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/register">Registrate</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/login">Ingresa</Link>
        </li>
      </ul>
      
      
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart">Cart</box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
      
    </header>
  );
};
