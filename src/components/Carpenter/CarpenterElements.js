import styled from 'styled-components/macro'

export const CarpenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: fit-content;
  padding: 20px 20px;
  @media screen and (max-width: 1020px){
    align-items: center;
    }
`;

export const CarpenterTitle = styled.h1`
    color: black;
    font-size: 48px;
    text-align: center;
    margin: 20px 0;
    @media screen and (max-width: 1020px){
        font-size: 40px;
    }
`;

export const CarpenterDescription = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 20px;
    max-width: 100vw;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media screen and (max-width: 1020px){
        flex-wrap: wrap;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const CarpenterImage = styled.img`
    width: 100%;
`;

export const CarpenterText = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 1.5;
    padding: 10px 10px;
    margin-left: 20px;
    @media screen and (max-width: 1020px){
        margin-left: 0;
        margin-top: 20px;
    }
`;