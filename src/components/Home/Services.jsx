import React, { useEffect } from "react";
import Rellax from "rellax";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Services = () =>{

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
        new Rellax(".animate-slow", {// <---- Via class name
          breakpoints: [576, 768, 1201] ,
          speed: 1,
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
  
  

    const phoneImage = "../images/responsive-phone.png";
    const phone = "../images/phone.jpg";
    const dude = "../images/dude.png";



    return (

        <React.Fragment>
        <div className='container-fluid my-5'>
            <div className='row justify-content-center'>
                <div className='col-sm-12 col-md-2 py-3'>
                 <h2>What I do</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>Web design & development</li>
                        <li className='list-group-item'>SEO and consulting</li>
                        <li className='list-group-item'>Graphic design</li>
                        <li className='list-group-item'>Photography</li>
                        <li className='list-group-item'>Marketing and branding</li>
                    </ul>
                </div>

                <div className='offset-sm-1 col-sm-12 col-md-5 py-3'>
                    <h2>How I can help</h2>
                    <p style={{'textAlign':"justify"}}>Your online presence is more important than ever before. Your website needs to represent you or your business in the best possible way and it needs to be easily descoverable in the sea of information available online. Not a simple task these days.  </p>
                    <p><strong>Get in touch and find out how I can help.</strong>  </p>
                    {/* <p><em>With twelve years of experience in web development I've picked up a thing or two.</em></p> */}
                    <Link to='/contact'><button className='btn hipcool btn-purple btn-lg my-4'>Contact me</button></Link>
                </div>
            </div>

        </div>
        


            <div className='container-fluid' style={{"background":"#f3f3f3"}}>
                    <div className='row justify-content-center hidden-overflow'  >

                            <div className='col-md-12 col-lg-5 py-5'>
                                <h2 className='my-3'>Responsive Web Design</h2>
                                <p className='my-4'>Accessibility and design combined. The website needs to be light and user-friendly and it should be easily viewed on any device. With hundreds of resolutions and screen sizes, your website needs to adapt and look great on any display. With most users accessing the internet thru their phone, its important to present them with the sleek and seamless experience they will come back to. </p>

                            </div>
                            <div className='col-xs-12'>
                                <Image src={phoneImage}  data-rellax-xs-speed='-1' className='animate mx-auto d-block img-fluid' />
                            </div>

                    </div>
        </div>

        <div className='container-fluid hidden-overflow py-5'>
                    <div className='row justify-content-start' >
                        <div className='offset-sm-1 col-md-12 col-lg-5 up'><Image src={phone}  data-rellax-xs-speed='-1' className=' mx-auto d-block img-fluid' /></div>
                        <div className=' col-md-12 col-lg-4 py-5 down'>
                            <h2 className='my-3'>Photography</h2>
                            <p className='my-4'>Professional photography service for your product beautifully integrated with your website. The most important aspect of any website is the imagery. The photographs, be it of food, products or events, speak volumes about the quality of service you provide. I'm sure we've all stumbled accross a website with unpleasant imagery. I know I have, and I know the first thing that came to mind is that I do not trust the organization that runs that website to satisfy my needs.</p>

                        </div>
                    </div>
        </div>


        <div className='container-fluid hidden-overflow ' style={{"background":"#f3f3f3"}}>
                    <div className='row justify-content-center' >
                        
                         <div className='col-md-12 col-lg-4 py-5 down' data-rellax-speed='-5'>
                         <h2 className='my-3'>Photography</h2>
                            <p className='my-4'>Professional photography service for your product beautifully integrated with your website. The most important aspect of any website is the imagery. The photographs, be it of food, products or events, speak volumes about the quality of service you provide. I'm sure we've all stumbled accross a website with unpleasant imagery. I know I have, and I know the first thing that came to mind is that I do not trust the organization that runs that website to satisfy my needs.</p>

                        </div>
                        <div className='col-md-12 col-lg-5 down'><Image src={dude}  data-rellax-xs-speed='-1' className=' mx-auto d-block img-fluid' /></div>
                       
                    </div>
        </div>

        </React.Fragment>
    )
}

export default Services;
