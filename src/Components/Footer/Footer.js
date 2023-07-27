import React from "react";
import "./Footer.css";
import Logo from "../images/rinor.png";
const FooterComponent = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <p class="copyright-text">Developed by:{" "}   
         <a style={{color:" #bbb"}} href="#">Saqlain Shah</a>.
            </p>
          </div>
          </div>
        </div>
     
</footer>
  );
};

export default FooterComponent;
