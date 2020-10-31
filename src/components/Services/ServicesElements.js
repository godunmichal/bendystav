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

export const ServicesItem = styled(LinkR)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #000;
    margin: 20px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform 250ms ease-in-out;

    &:hover{
        transform: scale(1.03);
    }
`;



export const ServicesItemText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
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

export const ImgWrap = styled.div`
    max-width: 300px;
    height: 100%;
    margin: 10px 10px;
`;

export const ServicesItemImg = styled.img`
    width: 100%;
    padding: 5px 5px;;
`;
