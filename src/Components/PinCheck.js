import React, { useState, useEffect } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import logo from "/Users/vannelavenumadhavgoud/react-varkart/src/assets/Ecommerce image.png";
import axios from 'axios';
import { useHistory } from "react-router-dom";



const userFromLocal = JSON.stringify(localStorage.getItem('user') || '[]')
export default function PinCheck(props) {

    const [pinCode, setPinCode] = useState("");
    const [user, setUser] = useState(userFromLocal)
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = { pinCode };
        const response =  axios.post(
            'http://localhost:8080/PinRegistry/getPin',user)
      
        .then((responseStatus) => {
            console.log(responseStatus);
    
                if (responseStatus.Status === "Delivery available")
                alert("Delivery available !!!!!")

            
                if (responseStatus.Status === "user/account does not exist with the given emailId")
                alert(" Non Deliverable")
            
                 } )
                 setUser(response.data)
    // store the user in localStorage
    localStorage.setItem('user', response.data)
    console.log(response.data)
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.stringify(loggedInUser);
      setUser(foundUser);
    }
  }, []);
        return(
            <div className='div-login'>
                <div id="logo">
                        <div className="row">
                        <div className="column">
                        <h1 id="hd">VAR-KART</h1>
                        <img src={logo} alt="Logo"  width="450" height="450" id= "logoimg">
                      </img>
                      </div>
                      </div>
                    <div className="column"> 
                    <div id="bd">                 
                    <form
                    id="main-login"
                   
                    onSubmit={handleSubmit}>
                    <input onChange={({ target }) => setPinCode(target.value)} type="pin" id="emailid" name="PinCode" placeholder="Enter pincode" required/><br/>               
                    <button type="submit" onClick={handleSubmit}id="sgup" name="sgup">Check</button>
                    </form>
                        </div>
                </div>
                </div>
                </div>
        )


        }