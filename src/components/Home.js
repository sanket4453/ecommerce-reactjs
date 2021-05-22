import React from 'react'
import Product from './Product'
import '../styles/Home.css'
import homelogo from '../assets/mainpage.jpg'

function Home({productslist, term, searchKeyword}) {
 // console.log('productlis',productslist);
    return (
        <div className="home">
            <img className="home__image"
            src={homelogo}
           
            alt="homelogo"
            />
             <h2> Mobile Store</h2>
            <div className="home__row">
                <Product
                 productslist={productslist}
                />
                        
            </div>
           
        </div>
    )
}

export default Home
