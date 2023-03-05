import React from "react";
import "./Skillset.css"


export const SkillSet = () => {

    return (
        <div id="sec-skillset">
            <h1>Professional <b>Skillset</b></h1>
            <ul>
                <li><img src={require("./java-logo.png")} alt="Java" /> </li>
                <li><img src={require("./react-logo.png")} alt="ReactJs" /></li>
                <li><img src={require("./javascript-logo.png")} alt="Javascript" /></li>
                <li><img src={require("./HTML-logo.png")} alt="HTML" /></li>
                <li><img src={require("./CSS-logo.png")} alt="CSS" /></li>
                <li><img src={require("./sass-logo.png")} alt="SASS" /></li>
                <li><img src={require("./git-logo.png")} alt="GIT" /></li>
                <li><img src={require("./wp-logo.png")} alt="Wordpress" /></li>
            </ul>
        </div>

    )

}