import React from "react";

function Title() {
  console.log("Render title");
  return <h1>UseCallback Hook</h1>;
}

export default React.memo(Title);
