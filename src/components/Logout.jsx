import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import '../styles/Logout.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function Logout() {
    const { logout } = useAuth0();

    function closeSesion(){
        let timerInterval
        Swal.fire({
          title: 'Cerrando sesion',
          html: 'I will close in <b></b> milliseconds.',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
    }

    return (
        <div className="cont-buttonn" onClick={() => closeSesion()} >
            <Button onClick={() => logout()} variant="danger" type="submit" className="justify-content-end">Logout</Button>
        </div>
    )
}
