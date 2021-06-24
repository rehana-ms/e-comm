import React, { useState, useContext, useEffect } from "react";
import {
  faBars,
  faShoppingCart,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {RiLogoutBoxFill} from 'react-icons/ri';
import AuthService from "../services/auth.service"




export default function NavBar(){

  
  const { myShoppingCart } = useContext(GlobalCartContext);
  const [toggleNav, setToggelNav] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

 
  
  
//   const handleSubmit = (e) =>{
//     // <Link to="/Login"></Link>
//     AuthService.logout();

//     alert("You are logged out!!!!")
//     console.log("You are logged out");
// }
  
  // const user = AuthService.getCurrentUser();

 
  
  
  // const { currentUser } = user;
  // const { currentUser, showModeratorBoard, showAdminBoard }=user;

  const handleSubmit = (e) => {
    AuthService.logout();
    localStorage.clear();

    alert("You are logged out!!!!")
    console.log("You are logged out");
  };


  function handleToggle(e) {
    e.preventDefault();
    setToggelNav(!toggleNav);
  }
  return (
    <div>
      <header>
        <div className="container-nav">
          <nav >

            <div className="menu-icon">
              <FontAwesomeIcon
                icon={faBars}
                className="menu-icon-bar"
                onClick={(e) => handleToggle(e)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="menu-icon-close"
                onClick={(e) => handleToggle(e)}
              />
            </div>
            {/* <div className="nav-brand">
            <Link to={"/"} className="brand">
          VAR_KART
        </Link>
        &nbsp;
        &nbsp;

        </div> */}
<div className="-nav">
      

          {showAdminBoard && (""
            // <li className="nav-item">
            //   <Link to={"/admin"} className="nav-link">
            //     Admin Board
            //   </Link>
            // </li>
          )}

          {currentUser && (""
            // <li className="nav-bar">
            //   <Link to={"/user"} className="user">
            //     User
            //   </Link>
            // </li>
          )}

&nbsp;
</div>



              

        {currentUser ? (
          <div className="container-nav">
            <li >
              <Link to={"/profile"} className="currentuser">
               Hi! {currentUser.username}
              </Link>
            </li>

            <ul className="navigation-list">
                <li>
                   <Link to="/Home">
                 Home
                 </Link>
                 {/* <a href="/">Home</a>     */}
                </li> 
               <li>
               <Link to="#">
               Categories
               <i className="icon ">
                     <FontAwesomeIcon icon={faCaretDown} />
                   </i>
                 </Link>
               
                 <ul className="products-cat">
                   <li>
                     <Link to="/collections">All</Link>
                    
                   </li>
                   <li>
                     <Link to="/collections/men">Men</Link>
                   </li>
                   <li>
                     <Link to="/collections/appliances">Home Appliances</Link>
                    
                   </li>
                   <li>
                     <Link to="/collections/electronics">Electronics</Link>
                    
                   </li>
                   <li>
                     <Link to="/collections/women">Women</Link>
                   </li>
                   <li>
                     <Link to="/collections/kids">Kids</Link>
                   </li>
                   <li>
                     <Link to="/collections/groceries">Groceries</Link>
                    
                   </li>
                 </ul>
               </li>
               <li>
                <Link to="#">
                   Collections
                   <i className="icon ">
                     <FontAwesomeIcon icon={faCaretDown} />
                   </i>
                 </Link>
                 <ul className="products-cat">
                   <li>
                     <Link to="/trend/New">New Arrival</Link>
                   </li>
                   <li>
                     <Link to="/trend/Trending">Trending</Link>
                   </li>
                   </ul>
                 </li>
                 <li>
                   <Link to="/search">Search</Link>
              </li>


              {showAdminBoard ? (
            <div className="container-nav">
             <ul className="navigation-list">

             <li >
             <Link to="/PinRegistry">
                 PinRegistry
                 </Link>
            </li>
            </ul>
            </div>

) : ("")

}
                            

               {/* <li className="cart position-relative d-inline-flex">
                 <Link to="/Login" id= "Logout">
                 <form action="/#/Login" class="inline" onClick={logOut}>
                    <RiLogoutBoxFill/>Logout
                 </form>
                 </Link>
               </li> */}

               <li className="nav-shopping-cart">
                
                 <Link
                  to="/cart"
                  className="cart position-relative d-inline-flex"
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="store-cart-icon"
                  />
                  <span className="cart-basket d-flex align-items-center justify-content-center ">
                    {myShoppingCart.length}{" "}
                  </span>
                </Link>
              </li>
                
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;

              

              
            <li >
              
              <a href="/login"  onClick={handleSubmit}>
             
              {/* <RiLogoutBoxFill></RiLogoutBoxFill> */}
              Logout
              </a>
            </li>
            </ul>
          </div>
        ) 
        // : ("")
        
        
        : 
        (
          <div className="navigation-list">
            <li>
              <Link to={"/login"} id="Logup">
                Login
              </Link>
            </li>

            <li >
              <Link to={"/register"} id="Sup">
                Sign Up
              </Link>
            </li>
          </div>
        )
        
        }

        

              </nav>
              </div>
            </header>
            </div>
  )

}