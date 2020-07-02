import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Services = () =>{


    const phoneImage = "../images/responsive-phone.png";


    return (

        <React.Fragment>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-sm-12 col-md-3 py-3'>
                 <h2>What I do</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>Web design & development</li>
                        <li className='list-group-item'>SEO and consulting</li>
                        <li className='list-group-item'>Graphic design</li>
                        <li className='list-group-item'>Photography</li>
                        <li className='list-group-item'>Marketing and branding</li>
                    </ul>
                </div>

                <div className='offset-md-1 offset-sm-0 col-sm-12 col-md-6 py-3'>
                    <h2>How I can help</h2>
                    <p style={{'textAlign':"justify"}}>Your online presence is more important than ever before. Your website needs to represent you or your business in the best possible way and it needs to be easily descoverable in the sea of information available online. Not a simple task these days.  </p>
                    <p><strong>Get in touch and find out how I can help.</strong>  </p>
                    {/* <p><em>With twelve years of experience in web development I've picked up a thing or two.</em></p> */}
                    <Link to='/contact'><button className='btn hipcool btn-purple btn-lg my-4'>Contact me</button></Link>
                </div>
            </div>

        </div>
        


            <div className='container-fluid' style={{"background":"#f3f3f3"}}>
                <div className='container'>
                    <div className='row my-5 justify-content-center' >
                        <div className='col-md-12 col-lg-5 py-5'>
                            <h2>Responsive Web Design</h2>
                            <p >Accessibility and design combined. The website needs to be light and user-friendly and it should be easily viewed on any device. With hundreds of resolutions and screen sizes, your website needs to adapt and look great on any display. With most users accessing the internet thru their phone, its important to present them with the sleek and seamless experience they will come back to. </p>

                        </div>
                        <div className='col-xs-12'>
                            <Image src={phoneImage} className='mx-auto d-block img-fluid' />
                        </div>
                    </div>
            </div>
        </div>

        </React.Fragment>
    )
}

export default Services;
