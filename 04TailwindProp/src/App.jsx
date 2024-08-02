import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj=
  {username:"paras",
    age: 22,
    college:"ADGIPS"}

  let newArr=[1,33,55,29];

  return (
    <>
    <h1 className='bg-red-300 font-bold text-black p-5 rounded-2xl animate-bounce'>Tailwind Test</h1>

    {/* **************************************************************************************************************** */}
    {/* We have taken this below code from "DEVUI.IO" */}

    {/* <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">Delba</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div> */}

{/* now we will study props */}
{/* Now we'll Study Props 
Props  make code reusable
therefore we store Our card in any component and make it reusable 
* Generally we divide  our code on the basis of language like html, css & JS
* but react work differently react seperat work on the basis of their function. 
* i.e Same Kaam wale Ko EK component mai aur different kaam wale to alag Component mai 
* NOW we'll make new folder "components" inside SRC and new file inside Component---> "Card.Jsx"
                                   ←(Card. Jsx)→
* rfcp --->>react Snippiet
* return our div.
* then import this card.JSx in APP.JSX 
* by" import Card from './components/card" 
* App.jsx treat card as a html :. we have to give closing tag of card too
* Now we can generate multiple card by just simpliy giving "<Card/>" */}
<Card username="chaiaurcode" btntext={myObj.college} para="NOW we have learn some goods ponts about React" imgSrc="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"/>
<Card username="Paras" btntext="clickme" para="So, this is my day 01 in libarary" imgSrc="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
</>
  )
}

export default App
