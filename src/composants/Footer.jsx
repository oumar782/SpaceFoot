import '../index.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <div className="brand-logo">
            <i className="fab fa-slack"></i>
            <span className="brand-name">FootSpace-Reserve</span>
            <hr />
          </div>
          <hr />
          <div className="social-icons"> 
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <hr />
        <div className="footer-links">
          <ul className="footer-section">
            <li className="section-title">Company</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Get started</a></li>
          </ul>
          <ul className="footer-section">
            <li className="section-title">Services</li>
            <li><a href="#">App Design</a></li>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Logo Design</a></li>
            <li><a href="#">Banner Design</a></li>
          </ul>
          <ul className="footer-section">
            <li className="section-title">Account</li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Preferences</a></li>
            <li><a href="#">Purchase</a></li>
          </ul>
          <ul className="footer-section">
            <li className="section-title">Courses</li>
            <li><a href="#">HTML & CSS</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Photoshop</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-text">
          <span className="copyright">© 2024 <a href="#">MyBrand</a> All rights reserved.</span>
          <span className="policy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
