import './App.css';
import {useState,useEffect} from 'react'
import Header from './components/Header';
import {BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {PRODUCTS} from './shared/products'
import Footer from './components/Footer';
import {auth} from './firebase/firebase'
import { useStateValue } from './state/StateProvider';
import ProductDetails from './components/ProductDetails';


function App() {
  const [productslist, setProductslist] = useState(PRODUCTS)
  const [search, setSearch] = useState("")
  const [{loggedinuser}, dispatch] = useStateValue();
  console.log('from app',productslist)

  const searchHandler =(search) =>{
      setSearch(search)
      if(search !== ""){
        const newProductlist = productslist.filter((product) =>{
          return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
        }) 
        setProductslist(newProductlist)
      }else{
        setProductslist(productslist)
      }
  }

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((userauth) =>{
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
         user: userauth
        })
      }else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })
   return () =>{
     unsubscribe()
   }
  }, [])

  const DishWithId = ({match}) => {
    return(
        <ProductDetails product={productslist.filter((product) => product.id === parseInt(match.params.id,10))[0]} 
          />
    );
  };
  return (
    <BrowserRouter>
    <div className="App">
   
    <Header/>
    <input type="text" className="filterdata" placeholder="filter data" value={search} onChange={(e)=> searchHandler(e.target.value) } />
      <Switch >
        <Route path="/pagedetails/:id" component={DishWithId} />
         <Route path="/checkout"><Checkout/></Route>   
         <Route path="/login"><Login/></Route>
         <Route path="/" ><Home productslist={productslist}/> <Footer/></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

