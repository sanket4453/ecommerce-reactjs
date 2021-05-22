import React, {useEffect} from 'react'
import { useStateValue } from '../state/StateProvider'
import '../styles/Subtotal.css'

function Subtotal() {
   // console.log(value);
   const [{basket}, dispatch] = useStateValue();
    const getCardTotal = basket =>{
       return basket?.reduce((amount,item) => item.price + amount, 0);
    }
   //const sum= basket?.reduce((amount,item) => item.price + amount,0);
   let value= getCardTotal(basket)
   
   
    return (
        
        <div className="subtotal">
            <h3> SubTotal({basket.length} items): {`${value}`}</h3>

            <button className="checkout__button">Proceed to CheckOut</button>
        </div>
    )
}


export default Subtotal

