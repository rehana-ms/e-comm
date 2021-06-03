


import React, { useState, useEffect } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import logo from "/Users/vannelavenumadhavgoud/react-varkart/src/assets/Ecommerce image.png";
import axios from 'axios';
import { useHistory } from "react-router-dom";



const userFromLocal = JSON.stringify(localStorage.getItem('user') || '[]')

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(userFromLocal)
    const history = useHistory();


    const handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        console.log(this.state.emailId);
    }
    const handleLogout = () => {
        setUser({});
        setEmailId("");
        setPassword("");
        localStorage.clear();
      };

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state.emailId);
        const user = { emailId, password };


        // console.log(this.state.password);
        // this.LoginDetails.emailId = this.state.emailId;
        // this.LoginDetails.password = this.state.password;
      
        const response =  axios.post(
            'http://localhost:8080/UserRegistry/signIn',user)
        // .then(response => response.json()
        
        // console.log(responseStatus);
        .then((responseStatus) => {
            console.log(responseStatus);
    
                if (responseStatus.Status === "succesfull login")
                alert("Login sucessfull !!!!!")

                history.push("/Home");

                if (responseStatus.Status === "password is incorrect")
                alert(" Invalid Password")

                if (responseStatus.Status === "user/account does not exist with the given emailId")
                alert(" Invalid EmailId")
            
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
                    // action={this.props.action}
                    // method={this.props.method}
                    onSubmit={handleSubmit}>
                    <input onChange={({ target }) => setEmailId(target.value)} type="email" id="emailid" name="EmailId" placeholder="Enter your email" required/><br/>
                    <input onChange={({ target }) => setPassword(target.value)} type="password" id="pwd" name="Password" placeholder="Enter Password" required/><br/>
                    
                    <button type="submit" onClick={handleSubmit}id="sgup" name="sgup">Login</button>
                    </form>


                    <h5 id="hed">Are you a new user?</h5>

                    <div className="form-group">
                    <Link to="/"> <button id="sgin" name="sgup">Sign up</button></Link>
                    </div>
                    {/* <button onClick={handleLogout}>logout</button> */}

                        </div>
                </div>
                </div>
                </div>
        )
    }
Login.defaultProps = {
    action: 'http://localhost:8080/UserRegistry/signIn',
    method: 'post'
};

export default Login;





















// import React, { useState , useEffect} from "react";
// // import axios from "axios";
// const userFromLocal = JSON.stringify(localStorage.getItem('user') || '[]')

// const Login = () => {
//   const [emailId, setEmailId] = useState(userFromLocal);
//   const [password, setPassword] = useState(userFromLocal);
//   const [user, setUser] = useState()

//   // const handleSubmit = async e => {
    
//   // };
// //   user = { 
// //             "emailId": "", 
// //             "password": ""
           
// //           }

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const user = { emailId, password };
//     // send the username and password to the server
//     const response = await axios.post(
//       "http://localhost:8080/UserRegistry/signIn",
//       this.user
//     );
//     // set the state of the user
//     setUser(response.data)
//     // store the user in localStorage
//     localStorage.setItem('user', response.data)
//     console.log(response.data)
//   };

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.stringify(loggedInUser);
//       setUser(foundUser);
//     }
//   }, []);


// // if there's a user show the message below
// //   if (user) {
// //     return <div>{user.name} is loggged in</div>;
// //   }

//   // if there's no user, show the login form
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="emailId">EmailId: </label>
//       <input
//         type="text"
//         value={emailId}
//         placeholder="enter a emailId"
//         onChange={({ target }) => setEmailId(target.value)}
//       />
//       <div>
//         <label htmlFor="password">password: </label>
//         <input
//           type="password"
//           value={password}
//           placeholder="enter a password"
//           onChange={({ target }) => setPassword(target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// Login.defaultProps = {
//   action: 'http://localhost:8080/UserRegistry/signIn',
//   method: 'post'
// };

// export default Login;

