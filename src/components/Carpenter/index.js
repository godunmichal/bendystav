import React from 'react'
import { ImgWrap, CarpenterContainer, CarpenterDescription, CarpenterImage, CarpenterText, CarpenterTitle } from './CarpenterElements'
import CarImg from '../../images/carpenter.jpg'

function Carpenter() {
    return (
        <CarpenterContainer>
            <CarpenterTitle>Výroba nábytku na míru</CarpenterTitle>
            <CarpenterDescription>
                <ImgWrap>
                <CarpenterImage src={CarImg} alt=""/>
                </ImgWrap>
                <CarpenterText>
                <p>Výroba nábytku na míru</p>
                </CarpenterText>
            </CarpenterDescription>
        </CarpenterContainer>
    )
}

export default Carpenter
