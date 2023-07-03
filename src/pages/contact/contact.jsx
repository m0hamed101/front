import React, { useRef } from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/footer/Footer'
import './Contact.css'
import { Inputform } from '../../components/inputform/Inputform'
export const Contact = () => {
    const nameraf = useRef()
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(nameraf);
    }
    return (
        <div className='formconect'>
            <Header />
            <div className="contactHeader">Contact Us</div>
            <form onSubmit={handlesubmit}>
                <Inputform placeholder="Name" refe={nameraf} />
                <Inputform placeholder="Email" refe={nameraf} />
                <Inputform placeholder="Message" refe={nameraf} />
                <button type='submit' className="submit">Submit</button>
            </form>
            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}
