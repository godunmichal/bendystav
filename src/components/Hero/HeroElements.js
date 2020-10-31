import styled from 'styled-components/macro'
import Background from '../../images/background.jpg'
export const HeroContainer = styled.div`
    background: url(${Background}) no-repeat fixed center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;c
`;

export const HeroTitle = styled.h1`
    color: white;
    font-size: 66px;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
        font-size: 56px;
    }
    @media screen and (max-width: 480px){
        font-size: 46px;
    }
`;