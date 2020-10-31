import React from 'react'
import {GrDiamond} from 'react-icons/gr'
import {FaSuitcase} from 'react-icons/fa'
import {GiHandSaw} from 'react-icons/gi'
import {GrTools} from 'react-icons/gr'
import { InfoContainer, InfoElement, InfoElementDescription, InfoElementDescriptionText,ElementsContainer, InfoElementDescriptionTitle, InfoElementImg, ElementsContainerCol2, ElementsContainerCol1 } from './InfoElements'
function Info() {
    return (
        <InfoContainer>
            <ElementsContainer>
                <ElementsContainerCol1>
            <InfoElement>
                <InfoElementImg>
                    <GrDiamond size={50}/>
                </InfoElementImg>
                <InfoElementDescription>
                    <InfoElementDescriptionTitle>
                        Česká firma
                    </InfoElementDescriptionTitle>
                    <InfoElementDescriptionText>
                        Lokalna Czeska firma
                    </InfoElementDescriptionText>
                </InfoElementDescription>
            </InfoElement>
            <InfoElement>
                <InfoElementImg>
                    <FaSuitcase size={50}/>
                </InfoElementImg>
                <InfoElementDescription>
                    <InfoElementDescriptionTitle>
                        Experience
                    </InfoElementDescriptionTitle>
                    <InfoElementDescriptionText>
                        15 years of experience
                    </InfoElementDescriptionText>
                </InfoElementDescription>
            </InfoElement>
            </ElementsContainerCol1>
            <ElementsContainerCol2>
            <InfoElement>
                <InfoElementImg>
                    <GiHandSaw size={50}/>
                </InfoElementImg>
                <InfoElementDescription>
                    <InfoElementDescriptionTitle>
                        Budowa na miarę
                    </InfoElementDescriptionTitle>
                    <InfoElementDescriptionText>
                    Rekonstrukcja 
                    </InfoElementDescriptionText>
                </InfoElementDescription>
            </InfoElement>
            <InfoElement>
                <InfoElementImg>
                    <GrTools size={50}/>
                </InfoElementImg>
                <InfoElementDescription>
                    <InfoElementDescriptionTitle>
                        Výstavba
                    </InfoElementDescriptionTitle>
                    <InfoElementDescriptionText>
                        Výstavba domů od nuly
                    </InfoElementDescriptionText>
                </InfoElementDescription>
            </InfoElement>
            </ElementsContainerCol2>
            </ElementsContainer>
        </InfoContainer>
    )
}

export default Info
