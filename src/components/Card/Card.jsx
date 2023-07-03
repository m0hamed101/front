import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

export const Card = ({ item }) => {
    return (
        <Link to={'/' + item.id} style={{ textDecoration: 'none' }}>
            <div className="card_contaner">
                <div className="imgg">
                    <div className="orders">
                        <FavoriteBorderOutlinedIcon style={{ color: 'black' }} />
                        <AddBoxOutlinedIcon style={{ color: 'black' }} />
                        <h4 className="price">{item.price[0].small}</h4>
                    </div>
                    <div className="imgcrd"><img src={item.image} alt="" /></div>
                    <div className="cardtitle">{item.title}</div>
                </div>
                <div className="carddes">{item.description}</div>
            </div>
        </Link>
    )
}
    // <Link to={'../item'} >
    //     <div class="card_parts">
    //         <div className="card-title">
    //             <h2>{item.price}</h2>
    //         </div>
    //         <div className="card_img">
    //         </div>
    //         <div className="detels">
    //             <h4>{item.title}</h4>
    //             <p>{item.description}</p>
    //         </div>
    //     </div>
    // </Link>
