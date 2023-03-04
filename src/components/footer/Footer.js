import React from "react";
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const fecha = new Date();
const anioActual = fecha.getFullYear();


export const Footer = () => {

    return (

        <footer>


            <div className="col-footer">
                <h5>Desing and develop by Nicolás Bauchi</h5>
            </div>

            <div className="col-footer">
                <h5>Copyright {anioActual}</h5>
            </div>

            <div className="col-footer">
                <ul>
                    <li><a href="https://www.linkedin.com/in/nicolasbauchi/"><LinkedInIcon fontSize="large" /></a></li>
                    <li><a href=""><GitHubIcon fontSize="large" /></a></li>
                </ul>
            </div>





        </footer>

    )
}