import React from "react";
import { Image } from 'react-bootstrap';

const tools = () => {

    const tools = '../../images/tools.jpg';

    return (
            <div className='container-fluid '>
            <Image src={tools} className="mx-auto d-block img-fluid "></Image>
            </div>
    )

}

export default tools;
