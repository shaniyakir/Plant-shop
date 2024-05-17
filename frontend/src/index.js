import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import NavBar from './layout/navBar'
import Footer from './layout/footer'
import Login from './pages/login'
import Register from './pages/register'
import Products from './pages/products'
import Terms from './pages/terms'
import Refund from './pages/refundPolicy'
import About from './pages/aboutUs'
import FindMatch from './pages/findMatch'
import ProductDescription from './pages/product-description'
import Admin from './pages/admin'
import { UserContext } from './contexts/UserContext'
import { runTest } from './tests/Test'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Cookies from 'js-cookie'
import PlantCare from './pages/plantCare'
import Logout from './pages/logout'
import ReadMeShira from './pages/readMeShani'



export const DEFAULT_USER_LOGGED =  {username:"", isAdmin:false}

const Routing = () => {
  const [loggedUser, setLoggedUser] = useState({...DEFAULT_USER_LOGGED})
  const [loggedIn, setLoggedIn] = useState(false)
  
let testRunned = true
  useEffect(() => { 
    if (!testRunned) runTest()
    testRunned = true
    const cookie = JSON.parse(typeof(Cookies.get('session')) != 'undefined'? Cookies.get('session').substring(2) : '{}')
    if(typeof(cookie.userName) != 'undefined' ) {
      setLoggedUser({username:cookie.userName, isAdmin: cookie.username !== 'admin'})
      setLoggedIn(true)
    }
},[])

useEffect(() => {
    setLoggedIn(loggedUser.username !== DEFAULT_USER_LOGGED.username)
  }, [loggedUser])

  return(
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact="true" path="/" element={ !loggedIn ? <Navigate to={"/login"}/> : <App/>}/>
        <Route path="/login" element={ loggedIn ? <Navigate to={"/logout"}/> : <Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products-description" element={ !loggedIn ? <Navigate to={"/login"}/> : <ProductDescription/>}/>
        <Route path="/terms" element={!loggedIn ? <Navigate to={"/login"}/> : <Terms/>} />
        <Route path="/refund" element={ !loggedIn ? <Navigate to={"/login"}/> : <Refund/>}/>
        <Route path="/about" element={!loggedIn ? <Navigate to={"/login"}/> : <About/>} />
        <Route path="/plant-care" element={ !loggedIn ? <Navigate to={"/login"}/> : <PlantCare/>} />
        <Route path="/find-my-match"  element={ !loggedIn ? <Navigate to={"/login"}/> : <FindMatch/>}/>
        <Route path="/admin" element={ !loggedUser.isAdmin? <Navigate to={"/login"}/> : <Admin/>}/>
        <Route path="/cart" element={ !loggedIn ? <Navigate to={"/login"}/> : <Cart/>} />
        <Route path="/checkout" element={ !loggedIn ? <Navigate to={"/login"}/>: <Checkout/>} />
        <Route path="/logout" element={ !loggedIn ? <Navigate to={"/login"}/>: <Logout/>} />
        <Route path="/readme" element={<ReadMeShira/>} />
      </Routes>
      <Footer/>
    </Router>
    </UserContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

reportWebVitals();
