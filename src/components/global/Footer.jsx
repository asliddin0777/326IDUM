import React from "react";
import Icon from "../../assets/images/logo.jpg";
// import Social from "../image/Social Media.png";
import '../../styles/footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="containerFooter">
          <div className="footerMain">
            <div className="footerInner">
              <img className="fImg" src={Icon} alt="" />
              <p>
                Jl. Siliwangi No 326, Tashkent, Karakamish, Almazar, <br /> Jawa
                SHakur 43351, Uzbekistan, (0266)531333
              </p>
              <h5>info@smpn1cibadak.sch.i</h5>
              <h5>smpn1cbd_kabsi@yahoo.co.id</h5>
            </div>
            <div className="footerInner">
              <h1>Tour</h1>
              <a href="#">Main</a>
              <a href="#">Gallery</a>
              <a href="#">News</a>
              <a href="#">School Profile</a>
            </div>
            <div className="footerInner">
              <h1>General Page</h1>
              <a href="#">Teacher Data</a>
              <a href="#">PPDB SMPN 1 Cibadak</a>
              <a href="#">PPDB Guide</a>
              <a href="#">Location</a>
              <a href="#">Contact</a>
            </div>
            <div className="footerInner">
              <h1>Social Media</h1>
              {/* <img src={Social} alt="" /> */}
            </div>
          </div>
          <div className="footerBottom">
            <p>
              Copyright © SMP Negeri 1 Cibadak. All right Reserved. Hosting By
              IDCloudHost
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;