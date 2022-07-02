import { useEffect, useState } from 'react'
import { Header } from './components/Header'

function App() {

  const [budget, setBudget] = useState(0)

  const [isValidBugdget, setIsValidBugdget] = useState(false)

  return (
    <>
      <Header budget={budget} setBudget={setBudget}  />
      <h1>Cost control</h1>
    </>
  )
}

export default App
