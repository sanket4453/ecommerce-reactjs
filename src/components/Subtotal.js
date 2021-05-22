import React, {useEffect} from 'react'
import { useStateValue } from '../state/StateProvider'
import '../styles/Subtotal.css'

function Subtotal() {
   // console.log(value);
   const [{basket}, dispatch] = useStateValue();
   let sum=0;
    const getCardTotal = basket =>{
       return basket?.reduce((amount,item) => item.price + amount, 0);
    }
   //const sum= basket?.reduce((amount,item) => item.price + amount,0);
   let value= getCardTotal(basket)
   sum= sum + parseInt(value);
   
    return (
        
        <div className="subtotal">
            <h3> SubTotal({basket.length} items): {`${sum/10}`}</h3>

            {/* <button className="checkout__button">Proceed to CheckOut</button> */}
        </div>
    )
}


export default Subtotal

