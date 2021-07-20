import React, { Component } from "react";

import CakeContainer from "./CakeContainer";
import store from "./redux/store";

import { Provider } from "react-redux";
import HooksCakeContainer from "./HooksCakeContainer";

export class Redux extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HooksCakeContainer />
          <CakeContainer />
        </div>
      </Provider>
    );
  }
}

export default Redux;
