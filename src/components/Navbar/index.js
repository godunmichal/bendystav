import React from 'react'
import { LogoImage, MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import Logo from '../../images/logo.jpg'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

function Navbar({toggle, hide}) {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <LogoImage src={Logo} alt="Logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle} hide={hide}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu hide={hide}>
                        <NavItem>
                            <NavLinks to="/projects">Projekty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Kontakty</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
