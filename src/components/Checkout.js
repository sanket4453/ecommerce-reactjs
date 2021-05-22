import React from 'react'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'
import '../styles/Checkout.css'
import { useStateValue } from '../state/StateProvider'
function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">

                {
                    basket.length === 0 ? (
                        <div>
                    <h2 className="checkout_title">Your Cart is empty</h2>
                    <p>You have no items in your cart</p>
                </div>
                    ) : (
                        <div> 
                            <h2 className="shoppingbaskettitle">Items in the Shopping Cart</h2>
                            {
                                basket.map(item =>(
                                <ProductCart 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }

                
            </div>
            {
                basket.length > 0 &&(
                 <div className="check__right">
                    <Subtotal/>
                 </div>

                )
            }
        </div>
    )
}

export default Checkout
