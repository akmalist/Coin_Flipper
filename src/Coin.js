import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div className="Coin-img">
        <img src={`https://tinyurl.com/react-coin-${this.props.img}-jpg`} />
      </div>
    );
  }
}

export default Coin;
