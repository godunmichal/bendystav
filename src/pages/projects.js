import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProjectsItem from '../components/ProjectsItem'
import { H1, ProjectsContainer, ProjectsContainerCol1, ProjectsContainerCol2 } from './ProjectsElements'
import Img1 from '../images/bathroom.jpg'
import Img2 from '../images/carpenter.jpg'
import Img3 from '../images/toilet.jpg'
function ProjectsPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <H1>Projekty</H1>
        <ProjectsContainer>
            <ProjectsContainerCol1>
                <ProjectsItem title='Koupelna' img={Img1}/>
                <ProjectsItem title='Kitchen' img={Img2}/>
                <ProjectsItem title='Toilet' img={Img3}/>
            </ProjectsContainerCol1>
            <ProjectsContainerCol2>
                <ProjectsItem title='Kitchen' img={Img2}/>
                <ProjectsItem title='Toilet' img={Img3}/>
                <ProjectsItem title='Koupelna' img={Img1}/>
            </ProjectsContainerCol2>
        </ProjectsContainer>
        </>
    )
}

export default ProjectsPage
