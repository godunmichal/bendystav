import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu } from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                    <SidebarLink to="/projects" onClick={toggle}>Projekty</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Kontakty</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
