import React from "react";
import "../../styles/Footer.scss";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faGlobe,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AmericanexpressCardIcon from '../../assets/images/cards/americanexpress.png';
import CirrusCardIcon from '../../assets/images/cards/cirrus.png';
import MaterCardCardIcon from '../../assets/images/cards/mastercard.png';
import VisaCardIcon from '../../assets/images/cards/visa.png';

export default function Footer() {
  const date = new Date();
  const dateyear = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_content">
          <div className="row">
            <div className="col-lg-4">
              <h2>VAR_KART</h2>
              <p>
                We are providing high quality services with 100% satisfaction
                guarantee.
              </p>
              <div className="footer_payment">
                <ul>
                  <li>
                    <a href="/">
                      <img
                        src={AmericanexpressCardIcon}
                        alt="americaExpress"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={CirrusCardIcon}
                       alt="CirrusCardIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src={MaterCardCardIcon}
                        alt="MaterCardCardIcon"
                      />
                    </a>
                  </li>
                 
                  <li>
                    <a href="/">
                      <img src={VisaCardIcon} alt="VisaCardIcon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <h2>Contact us</h2>
              <h5>
                <FontAwesomeIcon icon={faMapMarker} className="footer-icons" />
                IIIT_Hyd, Gachibowli , 500010
              </h5>
              <h5>
                <FontAwesomeIcon icon={faPhone} className="footer-icons" />{" "}
                +91 9848484848
              </h5>
              <h5>
                <FontAwesomeIcon icon={faEnvelope} className="footer-icons" />{" "}
                varkart2021@gmail.com
              </h5>
              <h5>
                <FontAwesomeIcon icon={faGlobe} className="footer-icons" />{" "}
                www.VAR_KART.com
              </h5>

              <h3> Customer Care</h3>

              <h5>
                <FontAwesomeIcon icon={faClock} className="footer-icons" /> Mon.
                - Fri. 8am to 5pm
              </h5>
              <h5>
                <FontAwesomeIcon icon={faClock} className="footer-icons" /> Sat.
                8am to 11am
              </h5>
              <h5>
                <FontAwesomeIcon icon={faClock} className="footer-icons" /> Sun.
                <span> Closed</span>
              </h5>
            </div>
            <div className="col-lg-4">
              <h2>My Account</h2>
              <h5>Shopping Cart</h5>
              <h5>My Account</h5>
              <h5>Checkout</h5>
              <h5>Delivery</h5>
              <h5>Your Orders</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 footer_copyright">
            <p>Copyright &copy; {dateyear}.Reserved by VAR_KART.</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
