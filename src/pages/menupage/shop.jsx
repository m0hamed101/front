import React, { useEffect, useState } from 'react';
import '../menupage/shop.css';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Footer } from '../../footer/Footer';
import { Headerpo } from '../../Header/Headerpo/Headerpo';
import { Card } from '../../components/Card/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Shop = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  
  const getProduct = () => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='shoppage'>
      <Headerpo />
      <div className="cat">
        <div className='catlink'><Link to={'/'}> All </Link></div>
        <div className='catlink'><Link to={'/'}> Coffee </Link></div>
        <div className='catlink'><Link to={'/'}> Snacks </Link></div>
        <div className='catlink'><Link to={'/'}> Other </Link></div>
      </div>
      <div className="menuitems">
        {product.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};
    // <Footer />
