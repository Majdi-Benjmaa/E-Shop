import React from "react";
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Productdetails from "../pages/Productdetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const Routers=()=>{
    return <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Cart' element={<Cart/>} />
        <Route path='Shop/=id' element={<Productdetails/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route  path='Signup' element={<Signup/>}/>
        <Route path='Shop' element={<Shop/>}/>
    </Routes>
       
}
export default Routers;