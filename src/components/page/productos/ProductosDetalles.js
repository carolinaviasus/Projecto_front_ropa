import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  // console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id, detalle.img1, detalle.img2])

  // const handleInput = (e) =>{
  // const number = e.target.value.toString().padStart(2,'01')
  //  setUrl(number)
  // }

  if(detalle.length < 1) return null;

  return (
    <>
    {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
          {/* <p className="nuevo">Nuevo</p> */}
          <div className="tamano">
            <select placeholder="Tamaño" >
              <option value="1">Xs</option>
              <option value="1">S</option>
              <option value="1">S/M</option>
              <option value="1">M</option>
              <option value="1">L</option>
              <option value="1">XL</option>
            
            </select>
            <p>Talla</p>
          </div>
          </div>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir a mi carrito
          </button>
          
          {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image.default} alt={detalle.title}/>
          }
          {/* <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} /> */}
          <div className="description">
          <p><b>Descripción: </b> Nuestros productos son 100% Colombianos, estan elaborados de manos de Madres colombianas 
          que han dejado a un lado sus rutinas domesticas, para cumplir con los requerimientos textiles de personas como tu 
          que buscan la combinacion entre precio, calidad y estilo</p>
          <br/>
          <p>«¡Vaya, este producto es fabuloso!» </p> 
          <p> </p>
          </div>
          
        </div>
   
    }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        // eslint-disable-next-line array-callback-return
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image.default}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}
