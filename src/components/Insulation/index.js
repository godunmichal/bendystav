import React from 'react'
import {ImgWrap, InsulationContainer, InsulationDescription, InsulationImage, InsulationText, InsulationTitle } from './InsulationElements'
import InsImg from '../../images/insulation.jpg'
function Insulation() {
    return (
        <InsulationContainer>
            <InsulationTitle>Zateplení budov, střech a fasád</InsulationTitle>
            <InsulationDescription>
                <ImgWrap>
                <InsulationImage src={InsImg} alt=""/>
                </ImgWrap>
                <InsulationText>
                <p>Inovujte s námi vaše bydlení k lepšímu. Orientujeme se na zateplení budov, rodinných a panelových domů a stavby na klíč.  Náklady na vytápění, plyn a energie nás všechny mohou minimálně jednou ročně poněkud zaskočit. Pomocí efektivního zateplení vašeho domova ale ušetříte významnou část původních nákladů a zajistíte, aby částky za energie zůstaly na minimální hodnotě. Zateplujeme fasády i střechy s nejmodernějšími materiály a technologiemi.</p>
                </InsulationText>
            </InsulationDescription>
        </InsulationContainer>
    )
}

export default Insulation
