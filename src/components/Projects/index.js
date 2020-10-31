import React from 'react'
import image from '../../images/projects.jpg'
import {Button, InfoContainer, Column1, Column2, Heading, Img, ImgWrap, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './ProjectsElements'
function AboutMe() {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <ImgWrap>
                        <Img src={image} alt="Photo"/>
                    </ImgWrap>
                    </Column1>
                    <Column2>
                    <TextWrapper>
                        <TopLine>Bendystav</TopLine>
                        <Heading>Projects</Heading>
                        <Subtitle>Lorem ipsum dot diam qis commodo quis imperdiet massa tincidunt. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Cursus turpis massa tincidunt dui. Rhoncus aenean vel elit scelerisque mauris. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Dui nunc mattis enim ut tellus elementum sagittis.</Subtitle>
                        <Button to='/projects'>Projekty</Button>
                    </TextWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default AboutMe
