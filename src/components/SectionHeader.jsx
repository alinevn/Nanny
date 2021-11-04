import React, { Component } from "react";
import avatar from "../static/avatar.png";
import Menu from "./Menu";
import card1 from "../static/card1.png";

export default class Header extends Component {
  state = {
    page: localStorage.page,
  };
  componentDidMount = () => {
    if (!localStorage.page) {
      let pages = ["Nanny", "childcare"];
      let pageR = pages[Math.floor(Math.random() * pages.length)];
      localStorage.setItem("page", pageR);
      this.setState({ page: pageR });
    }
  };
  render() {
    return (
      <>
        <div className="App-banner">
          <Menu />
          <div className="App-content-header">
            <div className="App-content">
              {this.state.page == "Nanny" ? (
                <>
                  <h1>Easily create or join a local nanny share with Hapu</h1>
                  <p className="text-large">
                    Hapu is airbnb for nanny share. Share you home, nanny and costs and create new flexible, affordable
                    solutions in childcar.
                  </p>
                </>
              ) : (
                <>
                  <h1>Create the childcare you need at a price you can afford</h1>
                  <p className="text-large">
                    Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family
                    profile today to get started.
                  </p>
                </>
              )}

              <div className="App-btn-play" style={{ marginTop: 32 }}>
                <div className="App-btn-play-icon">
                  <div className="App-btn-play-icon1"></div>
                </div>{" "}
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
                  See hapu in action (27 seconds)
                </a>
              </div>
            </div>
            <div>
              <div className="App-card-header App-menu-links-none">
                <img className="App-card-header App-menu-links-none" alt="connection img" src={card1} />
              </div>
            </div>
          </div>
        </div>
        <div className="App-header-1">
          <img src={avatar} className="Avatar" />
          <h4>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              Sarah’s day care available now in North Sydney
            </a>{" "}
            Wednesday, Thursday, Friday - 7:30 - 5:30
          </h4>
        </div>
      </>
    );
  }
}
