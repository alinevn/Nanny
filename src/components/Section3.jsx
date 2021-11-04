import React from "react";

function Section3(props) {
  return (
    <div className="App-section-col">
      <div className="App-medium-col">
        <h2>A framework built for the long term</h2>
        <p className="text-medium">
          Childcare is for the long term. And you need a framework you can count on that gives your share long term
          viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined
          process, transparency over money and equality of participation.
        </p>
        <div style={{ marginTop: 32 }}>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Read how Hapu’s tribal background defines our app
          </a>
        </div>
      </div>
      <div>
        <img className="App-card3 App-menu-links-none" alt="system screen image" src={props.card} />
      </div>
    </div>
  );
}

export default Section3;
