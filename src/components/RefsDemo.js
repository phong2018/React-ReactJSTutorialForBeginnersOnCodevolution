import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)    
        this.inputRef=React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler= ()  => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <bution onClick={this.clickHandler}>Click</bution>
            </div>
        )
    }
}

export default RefsDemo
