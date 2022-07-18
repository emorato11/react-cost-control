import React from 'react'
import { CostBudget } from './CostBudget'
import { NewBudget } from './NewBudget'

export const Header = ({ budget, setBudget, isValidBugdget, setIsValidBugdget }) => {
  return (
    <header>
      <h1>Cost planning</h1>
      {isValidBugdget ? (
        <CostBudget budget={budget} />
      ) : (
        <NewBudget budget={budget} setBudget={setBudget} setIsValidBugdget={setIsValidBugdget} />
      )}
    </header>
  )
}
