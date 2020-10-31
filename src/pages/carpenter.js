import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Carpenter from '../components/Carpenter';
import Sidebar from '../components/Sidebar'

function CarpenterPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Carpenter/>
        </>
    )
}

export default CarpenterPage
