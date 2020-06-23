import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom"; 
import "./personal-banner.css";


const Personalbanner = () => {

    const profile_picture = "../../images/portrait.jpg";

    return (

        <div className='container-fluid personal-banner'>

                <div className='container'>
                <div className='row'>
                    <div className=' col-xs-3 col-md-4 px-4'>
                        <Image className='mx-auto d-block img-fluid profile-pic' src={profile_picture} roundedCircle />
                    </div>

                    <div className='col-sm-12 col-md-7 col-lg-6'>
                        <div className='my-1 pl-4 d-block'>
                        <h1>Hello,<br/> I'm Nick</h1>
                        <p>I'm a freelance UX/UI designer, web developer and photographer from Serbia. I currently call <strong>Brisbane</strong>, Australia my home and I'm always on the lookout for interesting projects. </p>
                        
                        <Link to='/portfolio'><button className='btn hipcool btn-green btn-lg my-4'>My work</button></Link>
                        </div>
                       
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                    
                    </div>
                    <div className='col'>
                    </div>
                </div>
            
            </div>
        </div>
    )

}

export default Personalbanner;