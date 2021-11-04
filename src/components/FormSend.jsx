import React, { Component } from "react";

export default class FormSend extends Component {
  state = {
    name: "",
    email: "",
  };

  onChange(e) {
    if (e.target.id === "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.id === "email") {
      this.setState({ email: e.target.value });
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
    };
    new Promise(async (resolve, reject) => {
      await fetch("https://api.jungledevs.com/api/v1/challenge-newsletter/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => {
          Promise.resolve(response);
          if (response.status == "200") {
            alert(response.statusText);
            document.getElementById("form").reset();
          } else {
            alert(response.statusText);
          }
        })
        .catch((e) => {
          Promise.resolve(e);
          alert(e);
        });
    });
  };

  render() {
    return (
      <div className="App-section-col">
        <div className="App-medium-col">
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p className="text-large-dark">
            Leave us your name and email and we’ll update you as soon as a share becomes available in your area!
          </p>
          <div style={{ marginTop: 32 }}>
            <form id="form" onSubmit={(e) => this.onSubmit(e)}>
              <input
                required
                className="Input"
                type="text"
                placeholder="Your name"
                onChange={(e) => this.onChange(e)}
                id="name"
              />
              <input
                required
                className="Input"
                type="email"
                placeholder="Your email"
                onChange={(e) => this.onChange(e)}
                id="email"
              />
              <button className="Btn-send" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
