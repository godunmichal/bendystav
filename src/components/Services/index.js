import React from 'react'
import {ImgWrap, ServicesContainer, ServicesItem, ServicesItemImg, ServicesItems, ServicesItemsCol1, ServicesItemsCol2, ServicesItemText, ServicesTitle } from './ServicesElements'
import Insulation from '../../images/insulation.jpg'
import Build from '../../images/build.jpg'
import Carpenter from '../../images/carpenter.jpg'
import Renovation from '../../images/renovation.jpg'
import {animateScroll as scroll} from 'react-scroll'


function Services() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <ServicesContainer id='services'>
            <ServicesTitle>Moje služby</ServicesTitle>
            <ServicesItems onClick={toggleHome}>
                <ServicesItemsCol1>
                <ServicesItem to='/renovations' >
                    <ImgWrap>
                    <ServicesItemImg src={Renovation} alt=""/>
                    </ImgWrap>
                    <ServicesItemText>Rekonstrukce bytů a domů</ServicesItemText>
                </ServicesItem>
                <ServicesItem to='/building' >
                    <ImgWrap>
                    <ServicesItemImg src={Build} alt=""/>
                    </ImgWrap>
                    <ServicesItemText>Výstavba bytů a domů</ServicesItemText>
                </ServicesItem>
                </ServicesItemsCol1>
                <ServicesItemsCol2>
                <ServicesItem to='/insulation'>
                    <ImgWrap>
                    <ServicesItemImg src={Insulation} alt=""/>
                    </ImgWrap>
                    <ServicesItemText>Zateplení budov, střech a fasád</ServicesItemText>
                </ServicesItem>
                <ServicesItem to='/carpenter'>
                    <ImgWrap>
                    <ServicesItemImg src={Carpenter} alt=""/>
                    </ImgWrap>
                    <ServicesItemText>Výroba nábytku na míru</ServicesItemText>
                </ServicesItem>
                </ServicesItemsCol2>
            </ServicesItems>
        </ServicesContainer>
    )
}

export default Services
