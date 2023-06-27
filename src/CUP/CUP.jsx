import React from 'react';
import '../CUP/CUP.css';
import cupimg from '../assets/cup.jpg';

export const CUP = () => {
    return (
        <div className="cup">
            <div className="cuph">
                <h3>snachs</h3>
                <h1>crafting coffee that inspires</h1>
            </div>
            <div className="cupsections">
                <div className="cupleft">
                    <div>
                        <h1 className="lh1">PIZZA</h1>
                        <h3 className="lh3">Delicious, hand-tossed pizza made with fresh ingredients. come try a slice today at our cufe!</h3>
                    </div>
                    <div>
                        <h1 className="lh1">CAKE</h1>
                        <h3 className="lh3">induge in a sweet treat at our cafe with our freshly baked cakes made with the finest ingredients.come by today and satisfy you cravings!</h3>
                    </div>
                </div>
                <div className="cupimg">
                <img src={cupimg} alt="cup" />
                </div>
                <div className="cupright">
                    <div>
                        <h1 className="rh1">BURGER</h1>
                        <h3 className="rh3">Join us for a tasty burger at our cafe,made with fresh ingredients and available in a variety of flavors.Come satisfy your hunger today!</h3>
                    </div>
                    <div>
                        <h1 className="rh1">TOASTS</h1>
                        <h3 className="rh3">Join us for a delicious breakfast toast at our cafe, made with fresh ingredients and a variety of toppings. start your day off right with a quick and tasty breakfast.See you soon!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
