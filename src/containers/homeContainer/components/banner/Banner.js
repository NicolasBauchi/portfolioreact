import React from "react";
import "./Banner.css"
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';

export const Banner = () => {

    return (
        <div className="main1">

            <div className="containerBanner">

                <div className="col" >
                    <div className="inner-col">
                        <h1>Hi There! <PanToolOutlinedIcon className="saludo" fontSize="large" /></h1>

                        <h2>I'm <b className="titulo-nombre">NICOLÁS BAUCHI</b></h2>
                        <p>
                            Front end React Developer
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img src={require("../../coder.png")} alt={"Work illustrations by Storyset"} width={500} height={500} />
                </div>
            </div>

        </div>

    )
}