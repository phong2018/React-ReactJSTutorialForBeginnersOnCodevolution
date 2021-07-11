import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

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
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
