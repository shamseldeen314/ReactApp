import React from "react"
import { Navbar } from "react-bootstrap"
import Logo from '../Images/Logo.png'
function LogoApp() {
    return (
        <Navbar.Brand href="#"><img src={Logo} className='Logo ' alt='logo' /></Navbar.Brand>
    )
}

export default LogoApp