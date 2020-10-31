import React,{useState} from 'react'
import AboutMe from '../components/AboutUs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import ServicesV2 from '../components/ServicesV2';
import Sidebar from '../components/Sidebar'
import Projects from '../components/Projects'
function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            {/* <Services /> */}
            <ServicesV2 />
            <AboutMe/>
            <Info/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default Home
