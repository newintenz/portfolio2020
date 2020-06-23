import React from 'react'
import BottomStrip from './BottomStrip'

const Footer = () => {

    return(
        <React.Fragment>
        <div className='container-fluid footer-slant'>
            <div className='container'>
                <div className='row'>

                    <div className='col'>
                        <h3>This is my footer for now</h3>
                    </div>
                </div>
            </div>
        </div>
        <BottomStrip/>
        </React.Fragment>
    )
}

export default Footer;