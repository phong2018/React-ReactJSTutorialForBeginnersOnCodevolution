import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(){
        // this.setState (
        //     {
        //         count: this.state.count+1
        //     }
        // , ()=>{
        //     console.log('asynchonus function', this.state.count)
        // })
        this.setState((prevState) =>  ({
            count:prevState.count + 1
        }))
        console.log('synchonus function', this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
               <div> 
               count - {this.state.count}
               <button onClick={()=> this. incrementFive()}> Increment</button>
               </div>
            </div>
        )
    }
}

export default Counter
