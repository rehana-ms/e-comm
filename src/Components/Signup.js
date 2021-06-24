import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import logo from "/Users/vannelavenumadhavgoud/react-varkart/src/assets/Ecommerce image.png";
import axios from 'axios';



class Signup extends React.Component {
    state = {
        emailId: '',
        userName: '',
        password: '',
        mobileNumber: '',
        date: ''
    }
  
    SignupDetails = { 
        "emailId": "", 
        "username": "", 
        "password": "" ,
        "mobileNumber": "",
        "date":""
      }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        console.log(this.state.emailId);
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        console.log(this.state.username);
        this.SignupDetails.emailId = this.state.emailId;
        this.SignupDetails.userame = this.state.userName;
        this.SignupDetails.password = this.state.password;
        this.SignupDetails.mobileNumber = this.state.mobileNumber;
        this.SignupDetails.date = this.state.date;





        axios.post('http://localhost:8080/UserRegistry/create',this.SignupDetails)
        .then(response => alert("Registered Successfully"));
        this.props.history.push("/Login");
        // <Link to="/Signin">Login</Link>


    }
    // constructor() {
    //     super();
    //     this.state = {
    //         emailId: '',
    //         userName: '',
    //         password: '',
    //         mobileNumber: '',
    //         date: ''
    //     }
    //     this.emailId = this.emailId.bind(this);
    //     this.userName = this.userName.bind(this);
    //     this.password = this.password.bind(this);
    //     this.mobileNumber = this.mobileNumber.bind(this);
    //     this.date = this.date.bind(this);
       
    // }

    // emailId(event) {
    //     this.setState({ emailId: event.target.value })
    // }
    // userName(event) {
    //     this.setState({ userName: event.target.value })
    // }
    // password(event) {
    //     this.setState({ password: event.target.value })
    // }
    // mobileNumber(event) {
    //     this.setState({ mobileNumber: event.target.value })
    // }
    // date(event) {
    //     this.setState({ date: event.target.value })
    // }

    // Login(event) {
    //     fetch('http://localhost:8080/UserRegistry/create', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             emailId: this.state.emailId,
    //             password: this.state.password,
    //             userName: this.state.userName,
    //             mobileNumber: this.state.mobileNumber,
    //             date: this.state.date
    //         })
    //     }).then((Response) => Response.json())
    //     .then((Result) => {
    //         if (Result.Status === 'Success')
    //         this.props.history.push("/Home/Home");
    //         else
    //         alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
    //     })

    //     axios.post('http://localhost:8080/UserRegistry/create',this.SignupDetails)
    //         .then(response => alert("Registered Successfully"));
    // }




    
    render() {
        return (
            <div className='div-login'>
               
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
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.handleSubmit}>
                    {/* <h2></h2>   */}
                                <input onChange={this.handleChange} type="email" id="emailid" name="emailId" placeholder="Enter your email" required="required" data-validation-required-message="Please enter your message" /><br />
                                {/* <p id = "anveshakkati"></p> */}
                                <input onChange={this.handleChange} type="text" id="uname" name="userName" placeholder="Enter Name" required="required" data-validation-required-message="Please enter your message"/><br />
                                <input onChange={this.handleChange} type="password" id="pswd" name="password" placeholder="Enter Password" required="required" minLength="8" data-validation-required-message="Please enter your message" /><br />
                                <input onChange={this.handleChange} type="text"pattern="[0-9]*" id="contact" name="mobileNumber" placeholder="Enter Mobile number" required="required" data-validation-required-message="Please enter your message" /><br />
                                <input onChange={this.handleChange} type="date" id="dob" neme="date" placeholder="Enter Date of birth" required="required" data-validation-required-message="Please enter your message" /><br />
                                <button type="submit" onSubmit={this.handleSubmit} id="sgup" name="sgup">Sign Up  <Link to="/Login"></Link></button>
                            </form>

                            <h5 id="hed">Already user?</h5>
                            

                            <div className="form-group">
                                <Link to="/Login"> <button  id="sgin" name="sgin">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Signup.defaultProps = {
    action: 'http://localhost:8080/UserRegistry/create',
    method: 'post'
};
export default Signup;