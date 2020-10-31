import styled from 'styled-components/macro'


export const ProjectsItemContainer  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    margin: 20px 10px;
    max-height: auto;
    max-width: 330px;
`;
export const ProjectsItemText  = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`;
export const Image  = styled.img`
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
`;

export const ProjectsItemImage  = styled.div`
    position: relative;
    width: 100%;

    &:hover {
        ${Image}{
            opacity: 0.3;
        }
        ${ProjectsItemText}{
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

