import React from 'react'
import CTA from "./CTA"
import "./header.css"
import ME from "../../assets/avatar7.png"
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lancelot Hanisberg</h1>
        <div className="text-light">Fullstack Developer</div>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
