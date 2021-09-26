import React from 'react'
import '../styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <div className="cont-icons">
            <a href="/#"><FontAwesomeIcon icon={faFacebook} className="facebook"/></a> 
            <a href="/#"><FontAwesomeIcon icon={faInstagram} className="instagram"/></a> 
            <a href="/#"><FontAwesomeIcon icon={faYoutube} className="youtube"/></a> 
        </div>
    )
}

export default Contact
