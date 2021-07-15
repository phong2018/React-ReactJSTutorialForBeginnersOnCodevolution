import React from "react";
import { channelContextFunction, userContextFunction } from "../../App";

function ComponentF() {
  return (
    <div>
      <userContextFunction.Consumer>
        {(user) => {
          return (
            <channelContextFunction.Consumer>
              {(channel) => {
                return (
                  <div>
                    user context Function Value {user}, channel {channel}
                  </div>
                );
              }}
            </channelContextFunction.Consumer>
          );
        }}
      </userContextFunction.Consumer>
    </div>
  );
}

export default ComponentF;
