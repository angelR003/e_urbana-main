import React from "react";
import { Link } from 'react-router-dom';
const navbar = () =>(
    <div className="App">
    <header className="App-header">
    <Link to="/"> 
    <img className='logo_ecoluz'  width= "60"src="https://i.ibb.co/tDRrL6w/Screenshot-2024-12-06-145231.png" alt="Ejemplo de imagen" />
    </Link>
    
     <Link to="/"> 
     <button className='buttonheader'>Inicio</button> 
     </Link>
  
    <Link to="/estadisticas"> 
    <button className='buttonheader'>Estadísticas</button>
    </Link>     
    <Link to="/nosotros">
    <button className='buttonheader'>Nosotros</button>
    </Link>  
    </header>
    </div>
)

export default navbar;