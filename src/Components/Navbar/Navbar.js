import React from "react";
import Logo from '../../recursos/imagenes/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'
import '../../Components/CSS/Style.css';

export const Navbar = () => {
    const categorias= [
        {nombre:"Inicio", id:0, ruta:"/"},
        {nombre:"Jewelery", id:1, ruta:"categoria/jewelery"},
        {nombre:"Electronics", id:2, ruta:"categoria/electronics"},
        {nombre:"Men's clothing", id:3, ruta:"categoria/men's clothing"},
        {nombre:"Women's clothing", id:4, ruta:"categoria/women's clothing"},
    ]
    return (
        <>
            <div className="grilla">
                <header className="header">
                <Link>
                  <img src={Logo} alt="logo" />
                </Link>
                    <h1>ZapasAye</h1>
                </header>
                <nav className="nav">{
                    categorias.map((categoria)=>{
                        return <NavLink key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>
                    })}
                </nav>
                <section className="cart">
                    <Link to="/cart"><CartWidget /></Link>
                </section>
            </div>
        </>

    )

}
  
  export default Navbar;

  /*<img style={styles.imagenes} src={logo} alt="tienda online" /> */