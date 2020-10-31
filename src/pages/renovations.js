import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Renovations from '../components/Renovations';
import Sidebar from '../components/Sidebar'

function RenovationsPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Renovations/>
        </>
    )
}

export default RenovationsPage
