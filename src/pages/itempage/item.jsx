import { React, useState, useEffect } from 'react'
import { Header } from '../../Header/Header'
import { Footer } from '../../footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import itemimg from '../../assets/cupcard.jpg'
import './item.css'
import axios from 'axios';


export const Item = () => {
    const location = useLocation()
    const id = location.pathname
    // console.log(id);


    const [item, setitem] = useState([0]);

    useEffect(() => {
        getitem();
    }, []);

    const getitem = () => {
        axios.get('http://localhost:5000' + id)
            .then((response) => {
                setitem(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    console.log(item);




    return (
        <div className='item-contaner'>
            <Header />
            <div className="item-sections">
                <div className="item-left">
                    <div className="backbtn">
                        <Link to={`../shop`}>Back</Link>
                    </div>
                    <h1 className='item_title'>{item[0].title}</h1>
                    <h4>{item[0].description}</h4>
                </div>
                <div className="item-center">
                    <img src={item[0].image} alt="" />
                </div>
                <div className="item-right">
                    <h1>{item[0].price}</h1>
                    <div className="itemsize">
                        <select className="cars" id="cars">
                            <option value="volvo">none</option>
                            <option value="saab">Small</option>
                            <option value="opel">middam</option>
                            <option value="audi">big</option>
                        </select>
                    </div>
                    <button className='item_btn'>contact</button>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
