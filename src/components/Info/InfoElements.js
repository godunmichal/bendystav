import styled from 'styled-components/macro'

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: fit-content;
`;
export const ElementsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    height: 100%;
    flex-wrap: wrap;
`;

export const InfoElement = styled.div` 
    display: flex;
    align-items: center;
    width: 330px;
    justify-content: flex-start;
    margin: 20px 20px;
`;
export const InfoElementImg = styled.div`
    height: 50px;
    width: 50px;
    margin-right: 20px;
`;

export const InfoElementDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const InfoElementDescriptionTitle = styled.h1`
    font-size: 32px;
    font-weight: 500;
`;

export const InfoElementDescriptionText = styled.p`
    font-size: 24px;
    font-weight: 300;
`;

export const ElementsContainerCol2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
export const ElementsContainerCol1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;