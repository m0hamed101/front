import React, { useEffect, useState } from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../shop_page/shop_page.css'

export const Shop = ({ api }) => {



  const [product, setProduct] = useState([]);
  const [loding, setloding] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);


  const getProduct = () => {
    axios.get(api + '/products')
      .then((response) => {
        setProduct(response.data);
        setloding(true)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='shoppage'>
      <Header />
      <div className="cat">
        <div className='catlink'><Link to={'/'}> All </Link></div>
        <div className='catlink'><Link to={'/'}> Coffee </Link></div>
        <div className='catlink'><Link to={'/'}> Snacks </Link></div>
        <div className='catlink'><Link to={'/'}> Other </Link></div>
      </div>
      <div className="menuitems">
        {
          loding ? product.map(item => (
            <Card key={item.id} item={item} />
          )) :
            <div class="d-flex justify-content-center m-5">
              <div class="spinner-border m-3" role="status">
                <span class="sr-only"></span>
              </div>
            </div>
        }
      </div>
      <Footer />
    </div>
  );
};
    // <Footer />



    // {
    //   name: "sf"
    //   e: "sf"
    //   e: "sf"
    //   isAdmin: False
    // }

    // if data.isAdmin == True? 