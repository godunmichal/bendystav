import React from 'react'
import { FooterContainer, FooterWrap, LogoImage, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'
import Logo from '../../images/logo.jpg'

const Footer = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <LogoImage src={Logo} alt="Logo"/>
                        </SocialLogo>
                            <WebsiteRights>BendYStaV © {new Date().getFullYear()} Michal Godun.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='' target='_blank' aria-label=''>

                                </SocialIconLink>

                                <SocialIconLink href='' target='_blank' aria-label=''>
                                </SocialIconLink>

                            </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
