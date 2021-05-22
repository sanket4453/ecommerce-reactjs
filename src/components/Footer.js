import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footerarea">
            <div className="footerarea__top">
                <p>Back To Top</p>
            </div>
            <div className="footerarea__links">
                <div className="footerarea__linkarea">
                    <span>About Us</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Carrers</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Contact Us</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Terms and Conditions</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
