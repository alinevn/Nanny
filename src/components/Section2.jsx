import React from "react";

function Section2(props) {
  return (
    <div className="App-section">
      <div>
        <img className="App-card2 " alt="tax calculation example img" src={props.card} />
      </div>
      <div className="App-medium">
        <h2>Shared payments made simple</h2>
        <p className="text-medium">
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you
          might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment
          system takes care of the rest. You need never talk money or who owes what.
        </p>
        <div style={{ marginTop: 32 }}>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Read how Bridget’s share (without Hapu) ended over $15
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section2;
