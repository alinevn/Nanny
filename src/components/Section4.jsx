import React from "react";

function Section4(props) {
  return (
    <div className="App-section-col">
      <div>
        <img className="App-card4 " alt="icon image" src={props.card} />
      </div>
      <div className="App-medium-col">
        <h2>Coming soon: Nanny Share Daily Diary!</h2>
        <p className="text-medium">
          With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of
          the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures
          fo your little ones. We can’t wait!
        </p>
      </div>
    </div>
  );
}

export default Section4;
