import React, { Suspense } from "react";
import "../styles/Homepage.scss";



import "bootstrap/dist/css/bootstrap.min.css";
import loadingIcon from "../assets/images/dashboardloader3.gif";

const NavBar = React.lazy(() => import("./Navigation/NavBar"));
const Footer = React.lazy(() => import("./Navigation/Footer"));
const SecondaryIntro = React.lazy(() => import("./Intro/SecondaryIntro"));
const ProductCategories = React.lazy(() => import("./ProductCategories"));
const Banner = React.lazy(() => import("./Banner"));
const TopBanner = React.lazy(() => import("./Navigation/TopBanner"));
const HeroText = React.lazy(() => import("./Navigation/HeroText"));

export default function (props) {
  const title = 'VAR_KART'

  console.log(props)

  if(props.isIdleTimeOut) {
      props.history.push('/')
  }


  return (
    <div>
      <Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >
        <TopBanner />
        <NavBar />

        <HeroText />

        <SecondaryIntro />

        <ProductCategories />

        <Banner />

        <Footer />
      </Suspense>
    </div>
  );
}
