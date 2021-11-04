import Badge from "../static/Badge.svg";

export default function Menu() {
  return (
    <div className="App-menu">
      <div className="App-menu-links">
        <img src={Badge} className="App-logo" alt="company logo" />
        <h5 className="App-menu-links-none">Create Your Nanny Share</h5>
        <h5 className="App-menu-links-none">Browse Shares</h5>
        <h5 className="App-menu-links-none">Our Story</h5>
      </div>

      <div className="App-menu-btns">
        <button className="Btn">Become a Nanny Share Host</button>
        <h5 className=" Btn-1 App-menu-links-none">Sign In</h5>
      </div>
    </div>
  );
}
