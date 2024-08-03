import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
<div className="w-full h-screen duration-200"
  style={{backgroundColor: color}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center bg-white px-2 py-2 rounded-3xl">
<button onClick={ ()=> setColor("red")} className="outline-none px-4 py-1 bg-red-600 text-white rounded-full shadow-lg mx-3">Red</button>
<button onClick={ ()=> setColor("green")}  className="outline-none px-4 py-1 bg-green-600 text-white rounded-full shadow-lg mx-3">Green</button>
<button onClick={ ()=> setColor("blue")} className="outline-none px-4 py-1 bg-blue-600 text-white rounded-full shadow-lg mx-3">Blue</button>
<button onClick={ ()=> setColor("yellow")} className="outline-none px-4 py-1 bg-yellow-600 text-white rounded-full shadow-lg mx-3">Yellow</button>
<button onClick={ ()=> setColor("pink")} className="outline-none px-4 py-1 bg-pink-600 text-white rounded-full shadow-lg mx-3">Pink</button>
<button onClick={ ()=> setColor("gray")} className="outline-none px-4 py-1 bg-gray-500 text-white rounded-full shadow-lg mx-3">Grey</button>

</div>
</div>
</div>
  )
}

export default App
