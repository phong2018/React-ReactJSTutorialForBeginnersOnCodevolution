import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginedIn: true,
    };
  }

  render() {
    return this.state.isLoginedIn && <div>Wellcome Phong</div>;

    // return this.state.isLoginedIn ? (
    //   <div>Wellcome Phong</div>
    // ) : (
    //   <div>Wellcome Guest</div>
    // );

    // let message
    // if(this.state.isLoginedIn){
    //     message=<div>Wellcom Phong</div>
    // }else{
    //     message=<div>Wellcome Guess</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoginedIn){
    //     return (
    //         <div>  Wellcome Phong</div>
    //     )
    // }else{
    //     return (
    //         <div>  Wellcome Guess</div>
    //     )
    // }
  }
}

export default UserGreeting;
