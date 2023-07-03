import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import './item.css';
import axios from 'axios';
import Swal from 'sweetalert2';

export const Item = ({ api }) => {
  const [item, setItem] = useState([0]);
  const location = useLocation();
  const id = location.pathname;

  const [selectedOption, setSelectedOption] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    axios
      .get(`${api}/products `+ id)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    if (event.target.value === 'Small') {
      setPrice(item[0].price[0].small);
    } else if (event.target.value === 'middam') {
      setPrice(item[0].price[0].mid);
    } else {
      setPrice(item[0].price[0].larg);
    }
  };

  const showAlert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your BUY has been SUCCEDED',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="item-contaner">
      <Header />
      <div className="item-sections">
        <div className="item-left">
          <div className="backbtn">
            <Link to="../shop">Back</Link>
          </div>
          <h1 className="item_title">{item[0].title}</h1>
          <h4>{item[0].description}</h4>
        </div>
        <div className="item-center">
          <img src={item[0].image} alt="" />
        </div>
        <div className="item-right">
          <h1>{price}</h1>
          <div className="itemsize">
            <select value={selectedOption} onChange={handleOptionChange} className="cars" id="cars">
              <option value="Small">Small</option>
              <option value="middam">middam</option>
              <option value="larg">larg</option>
            </select>
          </div>
          <button onClick={showAlert} className="item_btn">
            BUY
          </button>
          <Link to={'../cart'} className="item_btn">ADD TO CART</Link>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
