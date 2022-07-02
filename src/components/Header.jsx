import React from 'react'
import { NewBudget } from './NewBudget'

export const Header = ({ budget, setBudget, isValidBugdget, setIsValidBugdget }) => {
  return (
    <header>
      <h1>Cost planning</h1>
      {isValidBugdget ? (
        <p>Cost Control</p>
      ) : (
        <NewBudget budget={budget} setBudget={setBudget} setIsValidBugdget={setIsValidBugdget} />
      )}
    </header>
  )
}
