import React from "react";
import { useLocation } from "react-router-dom";

const Buying = () => {
    const location = useLocation();
    const { item } = location.state.details;

    return (
        <div id="ing">
            <div id="prod">
                <div id="pro-img">
                <img src={item.url} alt={item.title} />
                </div>
                <div id="pro-deta">
                    <label id="pro-desc">{item.description}</label>
                    <label id="pro-title">{item.title}</label>
                    <br />
                    <p>Available offers</p>
<ul>
    <li>Bank Offer: 10% off up to ₹749 on HDFC Bank Credit Card Transactions. <a href="#">T&C</a></li>
    <li>Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. <a href="#">T&C</a></li>
    <li>Bank Offer: 10% off up to ₹1,250 on HDFC Bank Credit Card Transactions. Min Txn Value: ₹7,499. <a href="#">T&C</a></li>
    <li>Special Price: Get extra 47% off (price inclusive of cashback/coupon). <a href="#">T&C</a></li>
</ul>

                    <label id="price">{item.price} MRP ({item.discount}{item.percentage}% OFF)</label>
                    <div id="btn-pro">
                    <button id="buy">Buy</button>
                    <button id="cart">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buying;
