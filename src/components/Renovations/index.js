import React from 'react'
import {ImgWrap, RenovationsContainer, RenovationsDescription, RenovationsImage, RenovationsText, RenovationsTitle } from './RenovationsElements'
import RenImg from '../../images/renovation.jpg'

function Renovations() {
    return (
        <RenovationsContainer>
            <RenovationsTitle>Rekonstrukce bytů a domů</RenovationsTitle>
            <RenovationsDescription>
                <ImgWrap>
                <RenovationsImage src={RenImg} alt=""/>
                </ImgWrap>
                <RenovationsText>
                <p>Vtiskněte s námi novou tvář i vašemu starému domovu – rekonstrukce bytů,  bytových jader a rodinných domů se pro vás stane novým začátkem ve známém prostředí. Rozsah i postup při rekonstrukcích a přestavbách se vždy odvíjí od konkrétních požadavků a představ investora. Jsme schopni odborně realizovat kompletní rekonstrukce i přestavby od prvotního návrhu až po kolaudaci. Pokud jsme osloveni při začátku plánování rekonstrukce nebo přestavby, kdy ještě nejsou zpracovány projektové podklady a investor ještě nemá konkrétní představu výsledné podoby, bývá obvyklý následující postup:</p>
                <br/>
                <ul>
                    <li>Společná návštěva v místě rekonstruovaného nebo přestavovaného objektu, při které se zjistí stav objektu i rámcová představa budoucího užívání</li>
                    <li>Zaměření a zpracování výkresové dokumentace stávajícího stavu (v případě potřeby kontrola stavby statikem)</li>
                    <li>Schůzka, na které se předloží návrhy a společně dohodne vzhled a řešení výsledného provedení objektu</li>
                    <li>Zpracování projektu rekonstrukce nebo přestavby. Při zpracování je projekt průběžně konzultován s investorem</li>
                    <li>Předložení cenové nabídky na provedení rekonstrukce</li>
                    <li>Zajištění požadovaných povolení k realizaci rekonstrukce – obstaravatelská činnost</li>
                    <li>Realizace kompletního provedení rekonstrukce nebo pouze požadovaného rozsahu (pokud si investor přeje některé části nebo dodávky zajišťovat sám)</li>
                    <li>V průběhu rekonstrukce probíhají pravidelné kontrolní a koordinační schůzky s investorem nebo jeho technickým dozorem, pořizuje se fotodokumentace,  předávají se formou zápisu do stavebního deníku stavební konstrukce, které jsou následně zakryty,  kontroluje se způsob a kvalita provedení a časový harmonogram  jednotlivých  etap rekonstrukce atd. – obdobně, jako při realizaci novostavby</li>
                    <li>Závěrečná kontrola, proškolení v obsluze, předání podkladů, předání díla a kolaudace objektu</li>
                </ul>
                <br/>
                <strong>U většiny rekonstrukcí starších objektů bývá obvykle postup jednotlivých činností obdobný a jejich posloupnost bývá následující:</strong>
                <br/>
                <br/>
                <ul>
                    <li>Zpřístupnění objektu pro příjezd stavební techniky</li>
                    <li>Vyklizení objektu</li>
                    <li>Odstranění nežádoucích konstrukcí (omítky, obklady, podlahy, některé příčky, okna, dveře, vybavení, nevyhovující rozvody atd.)</li>
                    <li>Provedení větších či menších oprav  některých častí objektu dle jejich stavu (střecha, krov, klempířské prvky, nosné zdivo, stropy, základy)</li>
                    <li>Odvlhčení stavby – pokud je potřebné (drenáže po obvodu stavby, provětrávání podlah, odvlhčení a sanace zdiva)</li>
                    <li>Realizace nových  konstrukcí, oken, dveří, rozvodů, povrchových úprav,  izolací, podlah, truhlářských činností atd. dle požadavků investora nebo dle  projektu  nového provedení (dokončovací práce velmi obdobné jako u novostavby, pouze s větším důrazem na: prodyšnost  povrchových úprav při zvýšené vlhkosti v objektu, zlepšení tepelně izolačních vlastností  obvodových  konstrukcí a větším  důrazem  na kontrolu stávajících konstrukcí, do kterých se zasahuje)</li>
                </ul>
                </RenovationsText>
            </RenovationsDescription>
        </RenovationsContainer>
    )
}

export default Renovations
