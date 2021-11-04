import React from "react";

function Section1(props) {
  return (
    <div className="App-section">
      <div className="App-medium">
        <h2>Share your home, nanny and costs</h2>
        <p className="text-medium">
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If
          only it was easy to connect with other parents to share your costs? Well now it is, with Hapu.{" "}
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Hapu means tribe
          </a>{" "}
          and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe
          that together has the power to create new affordable solutions in childcare that work for you and your
          community.
        </p>
        <div style={{ marginTop: 32 }}>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Ready to get started?
          </a>
        </div>
      </div>
      <div>
        <img className="App-card1 " alt="system screen image" src={props.card} />
      </div>
    </div>
  );
}

export default Section1;
