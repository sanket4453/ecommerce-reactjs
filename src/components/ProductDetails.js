import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../state/StateProvider';
// import '../styles/PrductDetails.css'

function ProductDetails({product}) {
    if(!product){
        <div>
            Loding...
        </div>
    }
    console.log(product)
    const [{basket}, dispatch] = useStateValue()
    console.log("productdetails",basket);
    return (
        <div className="product">
            <div className="product__info">
                <h2>{product.title}</h2>
                <p className="product__price">
                    <small>&#8377;</small>
                    <strong>{product.price}</strong>
                </p>
                <p>
                    {product.description}
                </p>
                <div className="product__rating">
                    {
                        Array(product.rating)
                        .fill()
                        .map((_)=>(
                            <p>*</p>
                            ))
                        }
                </div>
            </div>
            <img className="prodimg" src={product.image} alt=""/>
          <Link to="/">
          <button className="backbtn">Back</button>
          </Link> 
        </div>
    )
}

export default ProductDetails
