import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import '../styles/Logout.css'

export default function Logout() {
    const { logout } = useAuth0();
    return (
        <div className="cont-buttonn">
            <Button onClick={() => logout()} variant="danger" type="submit" className="justify-content-end">Logout</Button>
        </div>
    )
}
