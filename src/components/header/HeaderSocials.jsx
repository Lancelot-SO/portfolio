import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {FiDribbble} from "react-icons/fi"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='www.linkedin.com/in/felix-sowah-876276246' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Lancelot-SO/portfolio' target="_blank" rel="noopener noreferrer"><BsGithub/></a> 
        <a href='https://dribbble.com/Lan_celot-1' target="_blank" rel="noopener noreferrer"><FiDribbble/></a>       
    </div>
  )
}

export default HeaderSocials
