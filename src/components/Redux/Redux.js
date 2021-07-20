import React, { Component } from "react";

import CakeContainer from "./CakeContainer";
import store from "./redux/store";

import { Provider } from "react-redux";
import HooksCakeContainer from "./HooksCakeContainer";
import IceCreamContainer from "./IceCreamContainer";
import NewCakeContainer from "./NewCakeContainer";
import ItemContainer from "./ItemContainer";

export class Redux extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ItemContainer cake />
          <ItemContainer />
          <HooksCakeContainer />
          <CakeContainer />
          <IceCreamContainer />
          <NewCakeContainer />
        </div>
      </Provider>
    );
  }
}

export default Redux;
