import React from 'react'
import { useStateValue } from '../state/StateProvider'
import '../styles/ProductCart.css'

function ProductCart({id, title, image, price, rating}) {
    console.log('product title',title)
    const [{basket}, dispatch] = useStateValue()
    console.log('product basket',basket)
    const removeItem =() =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id
        })

    }
    return (
        <div className="productcart">
            <img src={image} alt="" className="productcart__image" />
            <div className="productcart__info">
                <p className="productcart__title">{title}</p>
                <p className="product__price">&#8377;{price}</p>
            
            <div className="productcart__rating">
                {
                  Array(rating)
                 .fill()
                 .map((_) =>(
                    <span>*</span>
                    ))
                 }
            </div>
            <button onClick={removeItem}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default ProductCart
