import React from "react";
import PersonalBanner from "./PersonalBanner";
import Tools from "./Tools";
// import Slide from "../Slide";
import Services from "./Services";

const home = () => {
    return (
        <React.Fragment>
            <PersonalBanner/>
           
            <Services />
             <Tools />
        </React.Fragment>

    )

}

export default home;