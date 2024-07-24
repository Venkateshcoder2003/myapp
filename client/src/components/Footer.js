import React from 'react'
import "./footer.css"

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <>
            <div className="footer">
                <div className="container footer_container d-flex justify-content-around flex-wrap">
                    <div className="first mt-5">
                        <h4>Venkatesh M</h4>
                        <p>© {year} Venkatesh M All rights reserved</p>
                        <p className='d-flex'>
                            <i className='fa-brands fa-instagram'></i>
                            <i className='fa-brands fa-facebook mx-3'></i>
                        </p>
                    </div>
                    <div className="second mt-5">
                        <h4>Get In Touch</h4>
                        <p></p>
                        <p>venkateshvenki77644@gmail.com</p>
                        <p>+91 7204877644</p>
                    </div>
                    <div className="third mt-5">
                        <h4>About</h4>
                        <p>Resume</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer