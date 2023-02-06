import React from 'react'
import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import {Timer, Scroll} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo do ignite"/>
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header