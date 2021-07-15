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
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import PostList from "./components/HTTP/PostList";
import PostForm from "./components/HTTP/PostForm";
import ClassCounter from "./components/HOOKS/ClassCounter";
import HookCounter from "./components/HOOKS/HookCounter";
import HookCounterTwo from "./components/HOOKS/HookCounterTwo";
import HookCounterThree from "./components/HOOKS/HookCounterThree";
import HookCounterFour from "./components/HOOKS/HookCounterFour";
import ClassCounterOne from "./components/HOOKS/ClassCounterOne";
import HookCounterOne from "./components/HOOKS/HookCounterOne";
import ClassMouse from "./components/HOOKS/ClassMouse";
import HookMouse from "./components/HOOKS/HookMouse";
import MouseContainer from "./components/HOOKS/MouseContainer";
import IntervalClassCounter from "./components/HOOKS/IntervalClassCounter";
import IntervalHookCounter from "./components/HOOKS/IntervalHookCounter";
import DataFectching from "./components/HOOKS/DataFectching";
import DataFectchingOnePost from "./components/HOOKS/DataFectchingOnePost";
import ComponentD from "./components/HOOKS/ComponentC";
export const userContextFunction = React.createContext();
export const channelContextFunction = React.createContext();

class App extends Component {
  render() {
    return (
      <div className="App">
        <userContextFunction.Provider value={"Phong"}>
          <channelContextFunction.Provider value={"Hoc Code"}>
            <ComponentD />
          </channelContextFunction.Provider>
        </userContextFunction.Provider>

        {/* <DataFectchingOnePost /> */}
        {/* <DataFectching /> */}
        {/* <IntervalHookCounter />
        <IntervalClassCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter/> */}
        {/* <PostForm /> */}
        {/* <PostList /> */}

        {/* <UserProvider value="Phong">
          <ComponentC />
        </UserProvider> */}

        {/* <CounterTwo>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>
        <CounterTwo>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo> */}

        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedin) => (isLoggedin ? "Phong" : "Guess")} /> */}

        {/* <ClickCounter name="Phong" />
        <HoverCounter name="Phong" /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Supermane" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="joker" />
        </ErrorBoundary> */}

        {/* <PortalDemo/>  */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo/> */}
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
