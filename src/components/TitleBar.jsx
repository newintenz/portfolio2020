import React from "react";

const TitleBar = (props) => {

    const {pageTitle} = props;
   
    return (
        <div className='pageTitle'>
            <h1>{pageTitle}</h1>
        </div>
    )
}

export default TitleBar;