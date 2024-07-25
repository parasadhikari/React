// *****************************************TOPIC-1 & 2*******************************************************
// import Chai from "./chai"
// function App() {
 
//   return (

//   // <>
//   // <h1>Hello VITE </h1>
//   // <p>1. install vite through link in VITE </p> 
//   // <p>2. npm install ==>>to install node_module </p> 
//   // <p>3. go in src==>>delete unwanted </p> 
//   // <p>4. npm run dev </p> 
//   // </>

//   <Chai/>
//   )
// }

// export default App






// *****************************************TOPIC-3********************************************************
// HOW TO INJECT VARIABLE
import Chai from "./chai"
function App() {
  // LETS CREATE A VARIABLE
  const username="Paras love code"
  
  // LETS CREATE Another VARIABLE
  let sum=0;
  for (let i = 0; i <=5; i++) {
    sum=sum+i;
  }


  return (
  <>
  <h1>Hello VITE {username}</h1> {/* {..}this is "Evaluation Express" i.e here we write only final outcome not any code*/}
  {/*This is because react will treate that code as an text ...and we get our code exact as an text */}
  <p>1. install vite through link in VITE </p> 
  <p>2. npm install ==>>to install node_module </p> 
  <p>3. go in src==>>delete unwanted </p> 
  <p>4. npm run dev </p> 
  <h1>sum is:- {sum}</h1> {/* here we write only final outcome not any code */}
  
  </>
  )
}

export default App