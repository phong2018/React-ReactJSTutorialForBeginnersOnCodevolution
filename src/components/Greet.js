import React from 'react'

const Greet= (props) => { 
    //console.log(props)
    const {name, heroName}=props
    return (
        <div>  
            <h1> 
                Hello {name} - {heroName}
            </h1>
            
        </div>
    )
}

export default Greet