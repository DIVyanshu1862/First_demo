import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// Below is the above function converted into react code

// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   }, 
//   children:'click me to visit google'
// }
const anotherElement= (<a href="https://google.com" target= '_blank'>visit google</a> 
 )

 const ReactElement=React.createElement(v 
    
 )
ReactDOM.createRoot(document.  getElementById('root')).render(
  // <React.StrictMode>
  //   <App/>
  //   {/* <ReactElement /> */}
  //   {/* <MyApp/> */}
  // </React.StrictMode>, 
  anotherElement
)
 