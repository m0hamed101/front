
import '../menu/menu.css'
import KeyboardTabTwoToneIcon from '@mui/icons-material/KeyboardTabTwoTone';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../components/Card/Card';


export const Menu = ({api}) => {


  const [product, setProduct] = useState([0]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios.get(api+'/populer_items')
      .then((response) => {
        setProduct(response.data);
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
        {product.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
