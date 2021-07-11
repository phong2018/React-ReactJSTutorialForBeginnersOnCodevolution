import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecyleA from "./components/LifecyleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RefsDemo/>
        {/* <ParentComp/> */}
        {/* <PureComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <LifecyleA/> */}
        {/* <Form/> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <Inline/> */}
        {/* <Stylesheet primary='primary'/> */}
        {/* <NameList /> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/>   */}
        {/* <EventBind/> */}
        {/* <FunctionClick/>
          <ClassClick/> */}
        {/* 
          <Greet name="Bruce2"> 
            <p> This is Children2 </p> 
          </Greet>
          <Greet name="Bruce3" /> 

          <Welcome name="Bruce1" >
            <p> This is Children </p> 
          </Welcome> 
          <Hello></Hello>
          <Welcome></Welcome> */}
        {/* <Message /> */}

        {/* <Counter /> */}

        {/* <Greet name="Bruce1" heroName="BatMan"> 
            <p> This is Children </p> 
          </Greet> */}

        {/* <Welcome name="Bruce1" heroName="BatMan" /> */}
      </div>
    );
  }
}

export default App;
