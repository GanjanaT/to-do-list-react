import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'

function NotFoundPage() {
  return (
  <>
    <h1>Sorry, page not found.</h1>
    <p style={{marginLeft: "90px", fontSize:"2em", textDecoration:"none", textAlign: "center"}}>Go back to <Link style={{color: "white"}} to='/'>Homepage</Link></p>
    <img src={logo} alt="website logo" style={{marginTop: "50px", marginLeft: "90px"}}/>
  </>
  )
}

export default NotFoundPage