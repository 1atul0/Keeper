import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {createRoot} from 'react-dom/client'

const container=document.getElementById("root");
const root=createRoot(container);
root.render(<App tab='root' />)

// ReactDOM.render(<App/>,document.getElementById("root"));
