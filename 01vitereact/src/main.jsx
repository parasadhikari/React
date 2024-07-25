//********************************************(1st)******************************************************************/
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
  
// )




//********************************************(2nd)******************************************************************/
// *************creating function within main.jsx*****************
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// //lets create jsx ---->jsx in nothing but javascript function
// //jsx--->html mixed with javascript
// function MyApp() {
//     return(
//         <div>
//         <h1>Custom app!!</h1>
//         </div>
//     )
    
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <MyApp/>  //but this symbol is of jsx --->we use this syntax bcz of bundlar as it change function into react format as we lernt yesterday in 'CustomReact'
//     // MyApp() ---->also work but we didnt use this 

// )




// **************************************(3rd)**********************************************************************
// *************creating react-function within main.jsx*****************
//from above we can say React convert jsx in tree format...then why we didn't render tree stucture directly:) 
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// //lets create react Tree structure
// const ReactElement={
//     type : 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank',
//     },
//     children:'Click Me'
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//     // <ReactElement/> //Output should be -->"a"
//     // ReactElement() //doesnt give any output
//     // ReactElement// it doesnt give any output in all of three ways as React doesnt know these syntax:- type,props,children all these as we created ourself 
// )




// *************************************(4th)***********************************************************************
// innstaed above we can give 
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// const anotherelement=(
//     <a href="https://google.com" target='_blank'>visit Google</a>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//     anotherelement
// )

//*************************************************NOTE***************************************************/
// FROM ABOVE WE CAN SAY WE CAN CREATE:-
//FUNCTION in anoter file and render it in jsx form
//FUNCTION in same file and render it in jsx form
//FUNCTION in same file and render it in react form for this we need to know some more element










// *********************************#TOPIC 2********sol'n for ---->"3rd"*************************************
// // React provide various element like:-CREATEELEMENT
// let username= "Evaluated expression";

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'

// const reactElement=React.createElement(
//     'a',//any tag
//     {href: 'https://google.com',target:'_blank' },//attribute... if not need then keep blank but "we need to mention"
//     <h1>Click me to visit Google </h1>,//written
//     username  //Evaluated expression
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//     reactElement
// )
// // NOTE:-Now its give output unlike "3rd"
// //i.e createElement se aur kuch defined steps krna hoga toh hamara react code work krega 












// *****************************************TOPIC-3********************************************************
// HOW TO INJECT VARIABLE
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//    <App/>
// )



// *******************************Why do we need Hooks*******************************************************
//we ctreate project through vite