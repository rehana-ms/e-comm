import React, { Suspense, lazy, Component } from "react";
import { Link } from "react-router-dom";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './Components/Navigation/Header';
// import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
// import PropTypes from 'prop-types';




import { GlobalCartContextProvider } from "./context/CartContext";
import { ToastProvider } from "react-toast-notifications";
import loadingIcon from "./assets/images/dashboardloader3.gif";
import YourOrders from "./Components/Orders/YourOrders";
import OrderSucess from "./Components/Orders/OrderSucess";
import OrderFailed from "./Components/Orders/OrderFailed";




const Login = lazy(() => import("./Components/Jwt/login"));
// const Login = lazy(() => import("./Components/Login"));

const PinCheck = lazy(() => import("./Components/PinCheck"));
const Register = lazy(() => import("./Components/Jwt/register"));
const Profile = lazy(() => import("./Components/Jwt/profile"));
const BoardUser = lazy(() => import("./Components/Jwt/user"));
const BoardAdmin = lazy(() => import("./Components/Jwt/admin"));

const PinRegistry = lazy(() => import("./Components/PinRegistry"));

// const Sigup = lazy(() => import("./Components/Signup"));
const Cart = lazy(() => import("./Components/Cart/Cart"));

const Shopping = lazy(() => import("./Components/Shopping"));
const Catalog = lazy(() => import("./Components/Catalog"));

const Homepage = lazy(() => import("./Components/Homepage"));
const SearchProducts = lazy(() => import("./Components/SearchProducts"));



class App extends Component {

  constructor(props){
    super(props)
}

  render() {

  return (

    <div>
             {/* <Header /> */}

    <GlobalCartContextProvider>
      <ToastProvider>
        <Router>
          <Suspense
            fallback={
              <img src={loadingIcon} alt="loading" className="loadingIcon" />
            }
          >
                   

            <Switch>
              {/* <Route exact path="/" component={Sigup} /> */}
              {/* <Route exact path="/Login" component={Login} /> */}
              <Route exact path="/PinRegistry" component={PinRegistry} />
              <Route exact path="/PinCheck" component={PinCheck} />


              <Route exact path="/cart" component={Cart} />
              <Route exact path="/YourOrders" component={YourOrders} />
              <Route exact path="/OrderSucess" component={OrderSucess} />
              <Route exact path="/OrderFailed" component={OrderFailed} />



              <Route exact path="/Home" component={Homepage} />
              <Route exact path="/trend/:collectionname" component={Shopping} />
              <Route exact path="/collections" component={Shopping} />
              <Route exact path="/search" component={SearchProducts} />
              {/* <Route path='/' render={(props) => <Layout {...props} /> } /> */}


            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
  


              <Route exact path="/collections/:collectionname" component={Shopping}/>
              <Route exact path="/catalog/item/:id/:productname/:action" component={Catalog}/>
                         

              {/* <Route component={PageNotFound} /> */}
            </Switch>
          </Suspense>
        </Router>
      </ToastProvider>
    </GlobalCartContextProvider>

    </div>
  );
          }
}

// App.propTypes = {
//   match: PropTypes.any.isRequired,
//   history: PropTypes.func.isRequired
// }

export default App;
