import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
  return (

    
    <div className='navbar'> 

     <div className='links' id='logo'>
      <Link to= "/"><FontAwesomeIcon icon={faMobileScreenButton} /> Kay-Tech </Link>
       </div>
    <div className='links'>
    
      <Link to="/"> Shop </Link>
      <Link to="/cart"> 
         <ShoppingCart size={32}/> 
      </Link>

     
  

    </div>
    
 </div>
 
  )
};

