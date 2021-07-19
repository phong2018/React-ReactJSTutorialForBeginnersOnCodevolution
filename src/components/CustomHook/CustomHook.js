import React from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import DocTitleOne from "./DocTitleOne";
import DocTitleTwo from "./DocTitleTwo";

function CustomHook() {
  return (
    <div>
      <CounterOne />
      <CounterTwo />
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
    </div>
  );
}

export default CustomHook;
