import { useState } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import NewExpenditureIcon from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)

  const [isValidBugdget, setIsValidBugdget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animation, setAnimation] = useState(false)

  const handleNewExpenditure = () => {
    setModal(true)

    setTimeout(() => {
      setAnimation(true)
    }, 700)
  }

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBugdget={isValidBugdget}
        setIsValidBugdget={setIsValidBugdget}
      />
      {isValidBugdget && (
        <div className='new-expenditure'>
          <img src={NewExpenditureIcon} alt='New Cost Icon' onClick={handleNewExpenditure} />
        </div>
      )}
      {modal && <Modal setModal={setModal} animation={animation} setAnimation={setAnimation} />}
    </>
  )
}

export default App
