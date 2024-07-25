// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   let counter=5;

//   const addValue=()=>{
//     console.log("Value Added",counter);
//     counter=counter+2;
//   }
//   return (
//     <>
//       <h1>Chai aur code</h1>
//       <h2>Counter value:{counter}</h2>

//       <button onClick={addValue}>change value</button><br/>
//       <button>delete value {counter} </button>
//       <p>Footer: {counter}</p>
//     </>
//   )
// }

// export default App





// *************************************************************************************************
// now we want changes in UI too...
//that is done through "HOOK" in react
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const sum=(5*2)
let [counter, setCounter] = useState(sum)

  const addValue=()=>{
    console.log("clicked",counter);
    setCounter(counter + 5)
  }

  const deleteValue=()=>{
    for (let i = counter; i>=5; i--) {
      setCounter(counter-5)
    }
  } 

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>change value</button><br/>
      <button onClick={deleteValue}>delete value</button>
      <p>Footer</p>
    </>
  )
}

export default App




