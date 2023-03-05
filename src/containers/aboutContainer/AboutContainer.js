import React from "react";
import { BannerAbout } from "./components/bannerAbout/BannerAbout";
import { SkillSet } from "./components/skillSet/SkillSet";




export const AboutContainer = () => {

    return (
        <main>
            <BannerAbout />
            <SkillSet />
        </main>
    );
}