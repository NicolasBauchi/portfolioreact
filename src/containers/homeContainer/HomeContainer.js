import React from "react";
import { Banner } from "./components/banner/Banner";
import { Introduce } from "./components/introduce/Introduce";


export const HomeContainer = (mensaje) => {

    return (
        <main>
            <Banner />
            {console.log(mensaje)}
            <Introduce/>
        </main>
    )
}