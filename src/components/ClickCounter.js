import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Click {count} time</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
