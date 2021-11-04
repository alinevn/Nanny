import Union from "../static/Union.svg";
import Instagram from "../static/Instagram.svg";
import Facebook from "../static/Facebook.svg";
import Twitter from "../static/Twitter.svg";
import Logo from "../static/Logo.svg";
export default function Footer() {
  return (
    <div className="App-section-col">
      <div className="App-medium-col">
        <h2 style={{ height: 12 }}>Become a nanny share host</h2>
        <p className="text-medium">Takes less than 5 minutes to get started</p>
        <button className="Btn-footer">
          <div className="Btn-footer-content">
            <img src={Union} alt="icon" />
            <div>
              <p className="text-medium" style={{ margin: 0, color: "#ffffff" }}>
                Create Your Nanny Share
              </p>
              <p className="text-small" style={{ margin: 0, color: "#ffffff" }}>
                Takes less than 5 minutes
              </p>
            </div>
          </div>
        </button>
        <div>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Or browse local nanny-shares
          </a>
        </div>
      </div>
      <div className="App-footer">
        <img src={Logo} alt="company logo" />
        <div className="App-footer-btns ">
          <h5>Share Your Nanny</h5>
          <h5>Our Story</h5>
          <h5>Blog</h5>
          <h5>Terms & Privacy</h5>
        </div>
        <div className="App-menu-links-dark">
          <img src={Facebook} alt="Facebook icon" />
          <img src={Twitter} alt="Twitter icon" />
          <img src={Instagram} alt="Instagram icon" />
        </div>
      </div>
      <hr className="App-none" />
      <p className="text-small">Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </div>
  );
}
