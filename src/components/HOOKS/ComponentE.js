import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { userContextFunction, channelContextFunction } from "../../App";

function ComponentE() {
  const user = useContext(userContextFunction);
  const channel = useContext(channelContextFunction);

  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default ComponentE;
