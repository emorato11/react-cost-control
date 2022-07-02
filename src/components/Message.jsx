import React from 'react'

export const Message = ({children, type}) => {
  return (
    <div className={`alert ${type}`}>{children}</div>
  )
}
