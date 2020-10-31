import React from 'react'
import {ImgWrap, BuildingContainer, BuildingDescription, BuildingImage, BuildingText, BuildingTitle } from './BuildingElements'
import BuildImg from '../../images/build.jpg'
function Building() {
    return (
        <BuildingContainer>
            <BuildingTitle>Výstavba bytů a domů</BuildingTitle>
            <BuildingDescription>
                <ImgWrap>
                <BuildingImage src={BuildImg} alt=""/>
                </ImgWrap>
                <BuildingText>
                <p>Těšíte se na nový domov a nemůžete se dočkat jeho dokončení? S námi se ho dočkáte v co nejkratší době a nejvyšší kvalitě. Provádíme stavby na klíč – od prvotního návrhu, zaměření  objektu a vyhotovení rozpočtu až po konečnou realizaci včetně zednických a obkladačských prací, instalací vody, elektřiny či plynu. Postavíme Vám celý dům nebo jen základovou desku či hrubou stavbu. Jednoduše to, co budete potřebovat .</p>
                <br/>
                <p>Při stavbě domu, bytu či rekonstrukci budeme Vašimi partnery, ne jenom dělníky . Záleží nám na vzájemné komunikaci. Vy zakomponujete všechna svoje přání a představy do stavební dokumentace a my dle tohoto zadání budeme realizovat danou stavbu. Vyhneme se tak nečekaným více-pracím a z toho plynoucímu navýšení ceny. Na případných změnách se dohodnete s pracovníkem, který je Vám k dispozici  od začátku projektu.</p>
                </BuildingText>
            </BuildingDescription>
        </BuildingContainer>
    )
}

export default Building
