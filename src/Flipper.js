import React, { Component } from "react";

import Coin from "./Coin";

class Flipper extends Component {
  static defaultProps = {
    title: "Lets flip a coin"
  };
  constructor(props) {
    super(props);
    this.state = { bet: 0, tail: 0, head: 0, open: true };
    this.flip = this.flip.bind(this);
  }

  flip() {
    const currentState = this.state.open;
    this.setState({ open: !currentState, bet: this.state.bet + 1 });
    if (this.state.open === true) {
      this.setState({ tail: this.state.tail + 1 });
    } else {
      this.setState({ head: this.state.head + 1 });
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Coin img={this.state.open ? "tails" : "heads"} />
        <p>
          Out of {this.state.bet} there have been {this.state.tail} tails and{" "}
          {this.state.head} heads
        </p>

        <button onClick={this.flip}>Flip the coin</button>
      </div>
    );
  }
}

export default Flipper;
