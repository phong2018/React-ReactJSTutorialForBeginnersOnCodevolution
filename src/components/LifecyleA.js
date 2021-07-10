import React, { Component } from 'react'
import LifecyleB from './LifecyleB'

class LifecyleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Phong'
        }
        console.log('Lifecyle A Contructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecyleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecyleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecyleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecyleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecyleA componentDidMount')
    }

    changeState=()=>{
        this.setState(
            {name: 'React'
        })
    }
    

    render() {
        console.log('LifecyleA render')
        return (
            <div>
            <div>LifecyleA</div>
            <button onClick={this.changeState}>Change State</button>
            <LifecyleB/>
            </div>
        )
    }
}

export default LifecyleA
