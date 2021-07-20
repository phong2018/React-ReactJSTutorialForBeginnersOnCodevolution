import React, { Component } from "react";

import CakeContainer from "./CakeContainer";
import store from "./redux/store";

import { Provider } from "react-redux";

export class Redux extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <CakeContainer />
        </div>
      </Provider>
    );
  }
}

export default Redux;
