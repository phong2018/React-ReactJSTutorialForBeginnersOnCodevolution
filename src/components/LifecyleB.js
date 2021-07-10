import React, { Component } from 'react'

class LifecyleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Phong'
        }
        console.log('LifecyleB Contructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecyleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecyleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecyleB shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecyleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecyleB componentDidMount')
    }
    

    render() {
        console.log('LifecyleB render')
        return (
            <div>
            LifecyleB
            </div>
        )
    }
}

export default LifecyleB
