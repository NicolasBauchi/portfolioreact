import React from "react";
import "./BannerAbout.css"


export const BannerAbout = () => {

    return (
        <div className="main1">

            <div className="containerBanner">

                <div className="col" >
                    <div className="inner-col">
                        <h1>Know Who <b>I'M</b></h1>
                        <p>
                            Hi everyone, I am <b>Nicolás Bauchi</b> <br /> from Buenos Aires, Argentina. <br />
                            I'm a <b>junior developer</b> who wants to get his first job as a programmer.  <br />
                            <br />
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img src={require("../../Code-typing.png")} alt="StorySet" width={500} height={500}/>
                </div>
            </div>

        </div>

    )
}