import React from 'react'
import { Link } from "react-router-dom";
import BottomStrip from './BottomStrip'

const Footer = () => {

    return(
        <React.Fragment>
        <div className='container-fluid footer-slant'>
            <div className='container'>
                <div className='row'>

                    <div className='col'>
                        <h3>Quick navigation</h3>
                        <ul className='list-unstyled'>
                            <li><Link to='/'>Home Page</Link></li>
                            <li><Link to='/portfolio'>My Portfolio</Link></li>
                            <li><Link to='/about'>About Me</Link></li>
                            <li><Link to='contact'>Contact me</Link></li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h3>Follow me on Socials</h3>
                        <ul className='list-unstyled'>
                            <li><Link to='/'>Home Page</Link></li>
                            <li><Link to='/portfolio'>My Portfolio</Link></li>
                            <li><Link to='/about'>About Me</Link></li>
                            <li><Link to='contact'>Contact me</Link></li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h3>Follow me on Socials</h3>
                        <ul className='list-unstyled'>
                            <li><Link to='/'>Home Page</Link></li>
                            <li><Link to='/portfolio'>My Portfolio</Link></li>
                            <li><Link to='/about'>About Me</Link></li>
                            <li><Link to='contact'>Contact me</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <BottomStrip/>
        </React.Fragment>
    )
}

export default Footer;