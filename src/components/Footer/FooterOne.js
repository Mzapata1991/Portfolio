import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href={process.env.PUBLIC_URL}>
                      Park Lane Llandrindod Wells, LD7 9QW
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">+44 1632 960290</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:helloscoda@gmail.com">
                      helloscoda@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-globe"></i>
                    <a href={process.env.PUBLIC_URL}>www.envato.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
