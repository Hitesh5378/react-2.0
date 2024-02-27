import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {

  
  const [count, setCount] = useState(0)

  return (
    <>
  <Card username="chaiaurcode"  btntext="click me"/>
  <Card username="hitesh"  btntext="visit me" />
  </>
  )
}

export default App
