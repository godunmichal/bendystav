import React from 'react'
import { Image, ProjectsItemContainer, ProjectsItemImage, ProjectsItemText, Text } from './ProjectsItem'

function ProjectsItem({title, img}) {
    return (
        <ProjectsItemContainer>
            <ProjectsItemImage>
                <Image src={img} alt="Photo"/>
                <ProjectsItemText>
                    <Text>{title}</Text>
                </ProjectsItemText>
            </ProjectsItemImage>
        </ProjectsItemContainer>
    )
}

export default ProjectsItem
