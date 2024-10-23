import React from 'react'
const Cart=(()=>{
    return(
        <div id='cart-main'>
            <div id='cart-details'>
            <div id='cart-head1'></div>
            <div id='cart-head2'></div>
            </div>
            <div id='cart-price'>
                <h1>PRICE DETAILS</h1>
                <ul id='cart-list'>
                    <li>price</li>
                    <li>Discount</li>
                    <li>Platform Fee</li>
                    <li>Delivery Charges</li>
                </ul>
            </div>
        </div>
    )
})
export default Cart