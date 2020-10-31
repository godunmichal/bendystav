import styled from 'styled-components/macro'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
    max-width: 100vw;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;
export const LogoImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    left: 10px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: ${({hide}) => (hide ? 'none' : 'block')};
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`;

export const NavMenu = styled.ul`
    display: ${({hide}) => (hide ? 'none' : 'flex')};
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;

    &:after {
    display: block;
    content: "";
    color: #fa0501;
    border-bottom: solid 3px #fa0501;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    }
    &:hover:after {
    transform: scaleX(1);
    }
`;

export const NavLinks = styled(LinkR)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1.4em;
    cursor: pointer;

    &:hover{
        color:#fa0501;
    }
    &.active{
        border-bottom: 3px solid #fa0501;
    }
`;