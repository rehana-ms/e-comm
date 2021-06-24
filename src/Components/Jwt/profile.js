import React, { Component, Suspense } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import loadingIcon from "../../assets/images/dashboardloader3.gif";



const Footer = React.lazy(() => import("../Navigation/Footer"));
// const SecondaryIntro = React.lazy(() => import("../Intro/SecondaryIntro"));
const TopBanner = React.lazy(() => import("../Navigation/TopBanner"));
const HeroText = React.lazy(() => import("../Navigation/HeroText"));


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">

<Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >

<TopBanner />

        <HeroText />

        {/* <SecondaryIntro /> */}

        {(this.state.userReady) ?
        <div>
        <header>
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>: null}
      
      <Footer />


      </Suspense>

      </div>
    );
  }
}
