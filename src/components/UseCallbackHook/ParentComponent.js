import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const increamentAge = () => {
    setAge(age + 1);
  };
  const increamentSalary = () => {
    setSalary(salary + 1000);
  };
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={increamentAge}>increament Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={increamentSalary}>increament Salary</Button>
    </div>
  );
}

export default ParentComponent;
