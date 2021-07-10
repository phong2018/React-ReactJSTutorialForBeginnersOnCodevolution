import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'


export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Phong'
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Phong'
            })
        },3000)
    }
    
    render() {
        console.log('****** ParentComp *****')
        return (
            <div>
                ParentComponent
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
