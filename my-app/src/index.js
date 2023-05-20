import React from 'react'
import ReactDOM from 'react-dom/client'

function Container(props){
    return(
        <div>
            <h1>Hell'o {props.name}</h1>
            <Box name="Radhe"></Box>
        </div>

    )
}

function Box(props){
    return(
        <div>
            <h1>Box {props.name}</h1>
        </div> 
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Container name="Himanshu Raj"/>)