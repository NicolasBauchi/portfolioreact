import React from "react";
import "./Introduce.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export const Introduce = () => {
    return (
        <div className="containerIntroduce">
            <div className="row-intro">
                
                <div className="col-intro">
                    <img src={require("../../../../cvlogo.png")} id="imgPropia" alt="Mi foto de perfil" />
                </div>
                <div className="col-intro">
                    <div>
                        <h3>LET ME <b>INTRODUCE</b> MYSELF</h3>
                        <p>
                            I fell in love with programming and I have at least learnt something, I think… <br />
                            I am fluent in classics like C++, Javascript and Python.<br />
                            My field of Interest's are building new  Web Technologies<br />
                            and Products and also in areas related to Deep Learning and Natural Launguage Processing.<br />
                            Whenever possible, I also apply my passion for developing<br />
                            products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js
                        </p>
                    </div>
                </div>



            </div>

            <div className="row-intro-2">
                <div className="col-intro">
                    <h3>FIND <b>ME</b> ON</h3>
                    <p>Feel free to <b>connect</b> with me</p>

                    <ul id="iconos-home">
                        <li><a href="https://www.linkedin.com/in/nicolasbauchi/"><LinkedInIcon fontSize="large" /></a></li>
                        <li><a href="https://github.com/NicolasBauchi"><GitHubIcon fontSize="large" /></a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}