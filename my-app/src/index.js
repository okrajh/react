import React from 'react'
import ReactDOM from 'react-dom'

function Hello(props){
    return(
        <div>Hello {props.name} !</div>
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<Hello name="Himanshu Raj"/>)