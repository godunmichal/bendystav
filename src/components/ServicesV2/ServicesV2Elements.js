import styled from 'styled-components/macro'
import {Link as LinkR} from 'react-router-dom'


export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100vw;
    height: fit-content;
`;
export const ServicesItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    margin: 20px 10px;
    max-height: auto;
    max-width: 330px;
`;

export const ServicesTitle = styled.h1`
    color: black;
    font-size: 48px;
    text-align: center;
    margin: 20px 0;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const ServicesItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
export const ServicesItemImg = styled.img`
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
`;
export const ServicesItemText = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`;

export const ServicesItem = styled(LinkR)`
    position: relative;
    width: 100%;

    &:hover {
        ${ServicesItemImg}{
            opacity: 0.3;
        }
        ${ServicesItemText}{
            opacity: 1;
        }
  }
`;

export const Text = styled.div`
  background-color: #000;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
`;



export const ServicesItemsCol1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const ServicesItemsCol2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

