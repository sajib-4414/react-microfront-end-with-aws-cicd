import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//mount function to start the app
const mount = (el) =>{
    ReactDOM.render(<App/>,el)
}

//if we are in dev and isolation then call immediately
if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot){
        mount(devRoot);
    }
}

//we are running rhrought container
//we should export the mount function. 
export {mount}