import React from 'react'
import image from '../../images/profil.jpg'
import { InfoContainer, Column1, Column2, Heading, Img, ImgWrap, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './AboutUsElements'
function AboutMe() {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>Bendystav</TopLine>
                        <Heading>Jozef Bencik</Heading>
                        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida. Aliquet risus feugiat in ante. Neque sodales ut etiam sit amet nisl purus in. Malesuada nunc vel risus commodo viverra maecenas accumsan. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Et leo duis ut diam quam. Velit scelerisque in dictum non consectetur. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Cursus turpis massa tincidunt dui. Rhoncus aenean vel elit scelerisque mauris. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Dui nunc mattis enim ut tellus elementum sagittis.</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                        <Img src={image} alt="Photo"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default AboutMe
