import React from 'react'
import '../styles/LoginButton.css'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import google from '../logo/google.svg'

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="cont-button" >
                
            <Link to="/SistemaGestion">
                <div class="google-btn" onClick={() => loginWithRedirect()}>
                <div class="google-icon-wrapper">
                    <img class="google-icon" src= {google} alt = "Logo"/>
                </div>
                <p class="btn-text"><b>Sign in with google</b></p>
            </div></Link>
        </div>
    )
}
