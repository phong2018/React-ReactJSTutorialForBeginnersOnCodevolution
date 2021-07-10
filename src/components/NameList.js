import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["brue", "lex", "juni"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}-{name}
    </h2>
  ));
  return <div>{nameList}</div>;

  //   const persons = [
  //     { id: 1, name: "Phong1", age: 31, skill: "React1" },
  //     { id: 2, name: "Phong2", age: 32, skill: "React2" },
  //     { id: 3, name: "Phong3", age: 33, skill: "React3" },
  //     { id: 4, name: "Phong4", age: 34, skill: "React4" },
  //   ];

  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));
  //   return <div>{personList}</div>;
}
export default NameList;
