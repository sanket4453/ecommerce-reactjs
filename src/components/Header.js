import React,{useState} from 'react'
import logo from '../assets/EcommerceLogo.jpg'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import '../styles/Header.css'
import {auth} from '../firebase/firebase'
import {Link} from 'react-router-dom'
import { useStateValue } from '../state/StateProvider'

function Header() {

    const [{basket,loggedinuser}, dispatch] =useStateValue()
    // console.log(basket);
    const logoutUser =() =>{
        if(loggedinuser){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
              
              <Link to="/"> <img src={logo} alt="sitelogo" className="header__logo" /></Link>
               <div className="header__search">
                   <input  type="text" className="header__searchInput"  />
                   <SearchIcon className="header__searchIcon"/>
               </div>
            <div className="header__nav">  
               {/* 1st link */}
        <Link to={!loggedinuser && "/login"} className="header__link">
           <div onClick={logoutUser} className="header__option">
               <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
               <span className="header__optionLineTwo">{loggedinuser ? 'Sign Out' : 'Sign In'} </span>
           </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
           <div className="header__option">
               <span className="header__optionLineOne">Returns</span>
               <span className="header__optionLineTwo">& Orders</span>
           </div>
        </Link>
       
        </div> 
        <Link to="/checkout" className="header__link .header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__productCount">{basket?.length}</span>
        </Link>
        </nav>
    )
}

export default Header
