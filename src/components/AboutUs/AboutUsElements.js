import styled from 'styled-components/macro'


export const InfoContainer = styled.div`
    color: #fff;
    background: #f9f9f9;
    width: 100vw;
    height: fit-content;
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height:100%;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: flex;
    padding: 100px 0;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;

`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #fa0501;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #010001;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010001;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10px;
`;