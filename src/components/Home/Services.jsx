import React, { useEffect } from "react";
import Rellax from "rellax";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Services = () =>{

    // SETUP PARALAX EFFECT

    useEffect(() => {
        new Rellax(".animate", {// <---- Via class name
          breakpoints: [576, 768, 1201] ,
          speed: -1,
          center: true,
          round: true,
          vertical: true,
          horizontal: false
        });
      });

      useEffect(() => {
        new Rellax(".down", {// <---- Via class name
          breakpoints: [576, 768, 1201] ,
          speed: -2,
          center: true,
          round: true,
          vertical: true,
          horizontal: false
        });
      });
  
      useEffect(() => {
        new Rellax(".up", {// <---- Via class name
          breakpoints: [576, 768, 1201] ,
          speed: 2,
          center: true,
          round: true,
          vertical: true,
          horizontal: false
        });
      });
      // END PARALAX EFFECTS
  

      // IMAGE SOURCES
    const phoneImage = "../images/responsive-phone.png";
    const seo = "../images/seo.png";
    const honey = "../images/honey.jpg";
    const graphics = "../images/graphics.jpg";
      // END IMAGE SOURCES


    return (

        <React.Fragment> 
        <div className='container-fluid my-5'>
            <div className='row justify-content-center'>
                <div className='col-sm-12 col-md-2 py-3'>
                 <h2>What I do</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>Web Design & Development</li>
                        <li className='list-group-item'>Photography</li>
                        <li className='list-group-item'>SEO & Social Network Integration</li>
                        <li className='list-group-item'>Graphics and Print</li>

                    </ul>
                </div>

                <div className='offset-sm-1 col-sm-12 col-md-4 py-3'>
                    <h2>How I can help</h2>
                    <p style={{'textAlign':"justify"}}>Your online presence is more important than ever before. Your website needs to represent you or your business in the best possible way and it needs to be easily descoverable in the sea of information available online. Not a simple task these days.  </p>
                    <p>Get in touch and find out how I can help.</p>
                    <Link to='/contact'><button className='btn hipcool btn-purple btn-lg my-4'>Contact me</button></Link>
                </div>
            </div>
        </div>

      {/* WEB DESIGN */}
        <div className='container-fluid' style={{"background":"#f3f3f3"}}>
              <div className='row justify-content-center hidden-overflow'  >
                  <div className='col-md-12 col-lg-4 py-5'>
                      <h3 className='my-3'>Responsive Web Design</h3>
                      <p className='my-4'>Accessibility and design combined. The website needs to be light and user-friendly and it should be easily viewed on any device. With hundreds of resolutions and screen sizes, your website needs to adapt and look great on any display. With most users accessing the internet thru their phone, its important to present them with the sleek and seamless experience they will come back to. </p>
                      <h5 className='my-3'>Development Technologies and Skills</h5>
                      <div className='list-skills'>
                        <span className="badge badge-pill badge-secondary">PHP</span> 
                        <span className="badge badge-pill badge-secondary">JavaScript</span> 
                        <span className="badge badge-pill badge-secondary">MongoDB</span>  
                        <span className="badge badge-pill badge-secondary">API Integration</span> 
                        <span className="badge badge-pill badge-secondary">Codeigniter</span> 
                        <span className="badge badge-pill badge-secondary">ReactJS</span> 
                        <span className="badge badge-pill badge-secondary">GraphQL</span> 
                        <span className="badge badge-pill badge-secondary">Bootstrap 4</span> 
                        <span className="badge badge-pill badge-secondary">OOP</span> 
                        <span className="badge badge-pill badge-secondary">Firebase</span> 
                        <span className="badge badge-pill badge-secondary">Payment Gateways</span> 
                      </div>
                  </div>
                  <div className='col-xs-12'>
                      <Image src={phoneImage}  data-rellax-xs-speed='-1' className='animate mx-auto d-block img-fluid' />
                  </div>
              </div>
              
        </div>
      {/* WEB DESIGN */}



        {/* PRODUCT PHOTOGRAPHY */}
        <div className='container-fluid hidden-overflow py-5'>
            <div className='row justify-content-start' >
                <div className='offset-sm-2 col-md-12 col-lg-3 up' data-rellax-xs-speed='-1' data-rellax-mobile-speed="-1">
                  <Image src={honey}  className='mx-auto d-block img-fluid' />
                  </div>
                <div className=' col-md-12 col-lg-6 py-5'>
                    <h3 className='my-3'>Product & Food Photography</h3>
                    <p className='my-4'>Professional photography service for your product beautifully integrated with your website. The most important aspect of any website is the imagery. The photographs, be it of food, products or events, speak volumes about the quality of service you provide. I'm sure we've all stumbled accross a website with unpleasant imagery. I know I have, and I know the first thing that came to mind is that I do not trust the organization that runs that website to satisfy my needs.</p>
                
                </div>
            </div>
        </div>
      {/* PHOTOGRAPHY */}

      {/* SEO AND SOCIAL */}
        <div className='container-fluid'  style={{"background":"#f3f3f3"}}>
              <div className='row justify-content-center hidden-overflow'>
                  <div className='col-sm-12 col-md-4 py-5 '>
                      <h3 className='my-3'> SEO & Social Network Integration</h3>
                      <p className='my-4'>Accessibility and design combined. The website needs to be light and user-friendly and it should be easily viewed on any device. With hundreds of resolutions and screen sizes, your website needs to adapt and look great on any display. With most users accessing the internet thru their phone, its important to present them with the sleek and seamless experience they will come back to. </p>
                  </div>
                  <div className='col-xs-12 col-md-4 my-3'>
                      <Image src={seo}  data-rellax-xs-speed='-1' className='mx-auto d-block img-fluid' />
                  </div>
              </div>
        </div>
       {/* SEO AND SOCIAL */}

      {/* GRAPHICS AND PRINT */}
      <div className='container-fluid hidden-overflow py-5'>
            <div className='row justify-content-center' >
                <div className=' col-md-12 col-lg-4'>
                     <Image src={graphics}  className='mx-auto d-block img-fluid ' />
                </div>
                <div className='col-md-12 offset-md-1 col-lg-4'>
                  <h3 className='my-3'>Graphic Design</h3>
                    <p className='my-4'>Professional photography service for your product beautifully integrated with your website. The most important aspect of any website is the imagery. The photographs, be it of food, products or events, speak volumes about the quality of service you provide. I'm sure we've all stumbled accross a website with unpleasant imagery. I know I have, and I know the first thing that came to mind is that I do not trust the organization that runs that website to satisfy my needs.</p>
                  
               
                  </div>
            </div>
        </div>
      {/* GRAPHICS AND PRINT */}


        </React.Fragment>
    )
}

export default Services;
