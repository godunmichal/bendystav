import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Building from '../components/Building';
import Sidebar from '../components/Sidebar'

function BuildingPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Building/>
        </>
    )
}

export default BuildingPage
