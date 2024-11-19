import React from 'react'
import Link from 'next/link'
  

import { FaCarCrash } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";


const Header = () => {
  return (
<header className='header'>


    <h1 className='logo'> <FaCarCrash style={{color: "white", fontSize:"30px"}} />  CarPort
   
    </h1>
   
    
 
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about"> About</Link>
        <Link href="/cars">Cars</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/serives">Services</Link>
        {/* <Link href="/serives">Servies</Link> */}
        <MdAddCard style={{color: "white", fontSize:"30px"}} />
        
    </nav>

 

    
</header>
  )
}

export default Header;