import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Insulation from '../components/Insulation';
import Sidebar from '../components/Sidebar'

function InsulationPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Insulation/>
        </>
    )
}

export default InsulationPage
