import "./Navbar.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
//import { Navbar_estilos } from "./Navbar.estilos";
import logo from "../../cvlogo.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

export const Navbar = () => {

    const menu = [
        { nombre: "Home", id: 0, ruta: "/", muicono: <HomeOutlinedIcon /> },
        { nombre: "About", id: 1, ruta: "/about", muicono: <PersonOutlineOutlinedIcon /> },
        { nombre: "Projects", id: 2, ruta: "/projects", muicono: <BusinessCenterOutlinedIcon /> },
        { nombre: "Resume", id: 3, ruta: "/resume", muicono: <FeedOutlinedIcon /> }
    ]


    return (

        <header className="headerNb" >

<Link to="/"> <img src={logo} className="imagen" alt="Nicolás Bauchi dev." /></Link>

            <nav className="navNb">

                {menu.map((menu) => {
                    return (
                        <NavLink to={menu.ruta} key={menu.id} className="menus">
                            {menu.muicono}{menu.nombre}
                        </NavLink>)
                })}

            </nav>

        </header>
    );
}