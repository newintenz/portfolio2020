import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Services = () =>{


    const phoneImage = "../images/responsive-phone.png";


    return (

        <React.Fragment>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-3 col-xs-12'>
                 <h2>What I do</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>Web design & development</li>
                        <li className='list-group-item'>SEO and consulting</li>
                        <li className='list-group-item'>Graphic design</li>
                        <li className='list-group-item'>Photography</li>
                        <li className='list-group-item'>Marketing and branding</li>
                    </ul>
                </div>

                <div className='col-sm-5 col-xs-12'>
                    <h2>How can I help?</h2>
                    <p style={{'textAlign':"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius sapien vitae tempor efficitur. Phasellus justo nisi, maximus in nisi non, egestas gravida nulla. Donec lacinia ullamcorper turpis a bibendum. Etiam lorem orci, rhoncus vel molestie a, laoreet nec enim. Sed velit sapien, vulputate a velit non, condimentum imperdiet tellus. </p>
                    <Link to='/contact'><button className='btn hipcool btn-purple btn-lg my-4'>Contact me</button></Link>
                </div>
            </div>

        </div>
        


            <div className='container-fluid' style={{"background":"#f3f3f3"}}>
                <div className='container'>
                    <div className='row my-5' >
                        <div className='col-xs-12 col-md-5  py-5'>
                            <h2>Responsive Websites</h2>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius sapien vitae tempor efficitur. Phasellus justo nisi, maximus in nisi non, egestas gravida nulla. Donec lacinia ullamcorper turpis a bibendum. Etiam lorem orci, rhoncus vel molestie a, laoreet nec enim. Sed velit sapien, vulputate a velit non, condimentum imperdiet tellus. </p>

                        </div>
                        <div className='offset-sm-1 col-md-5 d-none d-xs-none d-md-none d-lg-block'>
                            <Image src={phoneImage} className='mx-auto d-block img-fluid' />
                        </div>
                    </div>
            </div>
        </div>

        </React.Fragment>
    )
}

export default Services;
