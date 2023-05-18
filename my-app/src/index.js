import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello {props.name} {props.age}</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello name="Webkul" age="20"/>);