import React from 'react'

// function Greet(){
//     return <h1> Hello Adekunle </h1>
// }

const Greet = (props) => {
console.log(props)
return ( 
<div>
<h3> Hello {props.name} is {props.nameCharacter} </h3>
{props.children}
</div>
)

}

export default Greet