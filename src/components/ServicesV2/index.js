import React from 'react'
import {ServicesItemContainer,Text, ServicesContainer, ServicesItem, ServicesItemImg, ServicesItems, ServicesItemsCol1, ServicesItemsCol2, ServicesItemText, ServicesTitle } from './ServicesV2Elements'
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
                    <ServicesItemContainer>
                <ServicesItem to='/renovations' >
                    <ServicesItemImg src={Renovation} alt=""/>
                    <ServicesItemText>
                        <Text>Rekonstrukce bytů a domů</Text>
                    </ServicesItemText>
                </ServicesItem>
                </ServicesItemContainer>
                <ServicesItemContainer>
                <ServicesItem to='/building' >
                    <ServicesItemImg src={Build} alt=""/>
                    <ServicesItemText>
                        <Text>Výstavba bytů a domů</Text>
                        </ServicesItemText>
                </ServicesItem>
                </ServicesItemContainer>
                </ServicesItemsCol1>
                <ServicesItemsCol2>
                <ServicesItemContainer>
                <ServicesItem to='/insulation'>
                    <ServicesItemImg src={Insulation} alt=""/>
                    <ServicesItemText>
                        <Text>
                        Zateplení budov, střech a fasád
                        </Text>
                        </ServicesItemText>
                </ServicesItem>
                </ServicesItemContainer>
                <ServicesItemContainer>
                <ServicesItem to='/carpenter'>
                    <ServicesItemImg src={Carpenter} alt=""/>
                    <ServicesItemText>
                        <Text>Výroba nábytku na míru</Text>
                    </ServicesItemText>
                </ServicesItem>
                </ServicesItemContainer>
                </ServicesItemsCol2>
            </ServicesItems>
        </ServicesContainer>
    )
}

export default Services
