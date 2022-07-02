import React, { useState } from 'react'
import { Message } from './Message'

export const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault()

        if(!Number(budget) || Number(budget) < 0) {
            setMessage('Not a valid budget')
            return
        }
        setMessage('')
    }

    return (
        <div className='container container-budget shadow'>
            <form onSubmit={handleBudget} className='form'>
                <div className='field'>
                    <label htmlFor="">Define Budget</label>
                    <input
                        type="number"
                        className='new-budget'
                        placeholder='Add your budget'
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Add" />

                {message && <Message type="error">{message}</Message>}
            </form>
        </div>
    )
}
