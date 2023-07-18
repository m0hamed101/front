
import KeyboardTabTwoToneIcon from '@mui/icons-material/KeyboardTabTwoTone';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components/Card/Card';
import './populer_item.css'
// import * as ReactBootstrap from 'react-bootstrap'


export const Menu = ({ api }) => {


  const [loding, setloding] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios.get(api + '/populer_items')
      .then((response) => {
        setProduct(response.data);
        setloding(true)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='menu'>

      <div className="menuhead">
        <h1>our populer items</h1>
        <h3 className='fully'>
          <Link to={`../shop`}>full menu</Link><KeyboardTabTwoToneIcon className='micon' />
        </h3>
      </div>
      <div className="menuitems">
        {loding ?
          product.map(item => (
            <Card key={item.id} item={item} />
          )) :
          <div class="d-flex justify-content-center m-5">
            <div class="spinner-border m-3" role="status">
              <span class="sr-only"></span>
            </div>
          </div>

        }


      </div>
    </div>
  )
}
