import React,{useRef,useEffect} from 'react'

import {Link, NavLink,useNavigate} from "react-router-dom"
import"./header.css"

import {motion} from "framer-motion"

import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"

import {Container,Row} from "reactstrap"
import {useSelector} from "react-redux"
import useAuth from "../../custom-hooks/useAyth"
import {Link} from "react-router-dom"
import {signOut} from "firebase/auth"
import {auth} from "../../firebase.config"

const nav__links = [

]



const Header = () => {
const headeRef = useRef(null)
const totalQuantity = useSelector((state)=> state.cart.totalQuantity)
const profileActionRef = useRef


const menuRef=useRef(null)
const navigate = useNavigate()
const {currentUser} = useAuth ()

const stickyHeaderFunc =()=>{
    window.addEventListener("scroll",()=>{
        if (
            document.body.scrollTop> 80 || 
            document.documentElement.scrollTop > 80
        ) {
            headeRef.current.classList.add("sticky__header")
        } else {
            headeRef.current.classList.remove("sticky__header")
        }
    })
}

const logout = ()=>{
    signOut(auth).then(()=>{
        toast.succsess('logged out')
        navigate("8home")
    }).catch(err=>{
        toast.error(err.message)
    })
}

useEffect (()=>{
    stickyHeaderFunc()
     return ()=>window.removeEventListener("scroll",stickyHeaderFunc)
})


const menuToggle = ()=> menuRef.current.classList.toggle
("active__menu")

const navigateToCart=c=>{
    navigateToCart("/cart")
}
 
const toggleProfileActions = ()=> profileActionRef.current.classList.toggle('show__profileActions')

  return (
    <header className='header' ref={headeRef}>
        <Container>
            <Row>
                <div className='nav__wrapper'>
                  <div className='logo'>
                    <img src={logo} alt="logo" />
                     <div>
                        <h1>Multimart</h1>
                     </div>
                  </div>

                  <div className='navigation' ref={menuRef} onClick={menuToggle}>
<motion.ul className="menu">
    {nav__links.map((item,index)=>(
        <li className='nav__item' key={index}>
<NavLink 
to={item.path}
className={(navClass)=>
navClass.isActive ? "nav__active" : ""
}
>
    {item.display}
</NavLink>
        </li>
    ))}

</motion.ul>
                  </div>
                  <div className='nav__icons'>
<span className="fav__icon">
<i class="ri-shopping-bag-line"></i>
<span className='badge'>{totalQuantity}</span>
</span>

<div className='profile'>
<motion.img whileTap={{scaler:1.2}} src={currentUser ? currentUser.photoURL : userIcon } alt="" onClick={toggleProfileActions}/>
<div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions}>
    {
        currentUser ? (
        <span onClick={logout}>Logout</span>
        ) : (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <Link to="/signup">Signup</Link>
            <Link to="/login">login</Link>
        </div>
    )}
</div>
</div> 
<div className='mobile__menu'>
<span onClick={menuToggle}>
    <i class='ri-menu-line'></i>
</span>
</div>
                  </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header