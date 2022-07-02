import React from 'react'
import { NewBudget } from './NewBudget'

export const Header = ({budget, setBudget}) => {
  return (
    <header>
        <h1>Cost planning</h1>
        <NewBudget budget={budget} setBudget={setBudget} />
    </header>
  )
}
