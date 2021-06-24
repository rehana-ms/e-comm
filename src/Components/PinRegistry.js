import React, { useState, Suspense }from 'react';
import './Signup.css';
// import { Link } from 'react-router-dom';
import logo from "/Users/vannelavenumadhavgoud/react-varkart/src/assets/Ecommerce image.png";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import loadingIcon from "../assets/images/dashboardloader3.gif";

const NavBar = React.lazy(() => import("./Navigation/NavBar"));



// class PinRegistry extends React.Component {
export default function PinRegistry() {

    const [pinCode, setPinCode] = useState("");
    const [pin, setPin] = useState()

    // state = {
    //     pinCode: ''
        
    // }
  
    // PinRegistryDetails = { 
    //     "pinCode": ""
        
    //   }

   const handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        console.log(this.state.pinCode);
    }

  const handleSubmit = (e) =>{
        e.preventDefault();

        // console.log(this.state.pinCode);
        // this.PinRegistryDetails.pinCode = this.state.pinCode;
        const pin = {pinCode};





     const response = axios.post('http://localhost:8080/api/PinRegistry/add',pin)
        // .then(response => alert("Registered Successfully"));
        // this.props.history.push("/Login");
        // <Link to="/Signin">Login</Link>

        .then((response) => {
            console.log(response);
            alert("Registered Successfully");
            // window.location="/OrderSucess"
    
    
          })
          .catch((error) => {
            console.log(error);
    
            alert("PinCode exist / Enter valid PinCode");
            
            // window.location="/OrderSucess"
    
          });
    }
   




    
        return (
            <div>
                  <Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >
                  {/* <NavBar /> */}



            <div className='div-login'>
                  <div>
      
        




    </div>
               
                <div id="logo">
                    <div className="row">
                        <div className="column">
                            <h1 id="hd">VAR-KART</h1>
                            <img src={logo} alt="Logo"  width="450" height="450">

                            </img>
                        </div>

                    </div>
                    <div className="column">
                        <div id="bd">
                        <form
                    id="main-login"
                    // action={this.props.action}
                    // method={this.props.method}
                    onSubmit={handleSubmit}>
                    {/* <h2></h2>   */}
                                <input  onChange={({ target }) => setPinCode(target.value)} type="number" id="emailid"  minlength="6" name="pinCode" placeholder="Enter pincode"  required="required  data-validation-required-message="Please enter pinCode /><br />
                                
                                <button type="submit" onSubmit={handleSubmit} id="sgup" name="sgup">pinCode 
                                 {/* <Link to="/Login"></Link> */}
                                 </button>
                            </form>

                            

                           
                        </div>
                        
                    </div>
                </div>
              
            </div>
            </Suspense>

            </div>

        )
    }

PinRegistry.defaultProps = {
    action: 'http://localhost:8080/PinRegistry/add',
    method: 'post'
};
// export default PinRegistry;