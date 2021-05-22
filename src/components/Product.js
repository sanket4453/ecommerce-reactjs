import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../state/StateProvider'
import '../styles/Product.css'

function Product({productslist,id, title, image, price, rating}) {
    const inputEl= useRef("");
    const [{basket}, dispatch] = useStateValue()
   
    if(!productslist){
       return(
           <div>
               Lodding..
           </div>
       )     
    }    
    const addToCart = (prod) =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                  id:prod.id,
                  title:prod.title,
                  image:prod.image,
                  price:prod.price,
                  rating:prod.rating
                }
            })
        }
        
        const product = productslist.map((prod)=>{
            return(
                
         <Link  to={`/pagedetails/${prod.id}`}>
            <div className="product">
            <div className="product__info">
                <h3>{prod.title}</h3>
                <p className="product__price">
                    <small>&#8377;</small>
                    <strong>{prod.price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(prod.rating)
                        .fill()
                        .map((_)=>(
                            <p>*</p>
                            ))
                        }
                </div>
            </div>
            <img className="prodimg" src={prod.image} alt=""/>
           <button onClick={() =>addToCart(prod)}>Add to Cart</button>
        </div>
        </Link>
         )
    })
       
    return (
        
        <div>
           
           {product}
           </div>

)
}
export default Product
        