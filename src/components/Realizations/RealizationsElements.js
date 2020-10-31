import styled from 'styled-components/macro'

export const RealizationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    background-color: #f3f3f3;
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
`;

export const RealizationsTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 48px;
    text-align: center;
    margin: 20px 0%;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const GalleryContainer = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100vh;
    background-color: white;
    padding: 10px 10px;
    height: fit-content;
    margin: 20px 30px;
    margin-top: 0;
`;
