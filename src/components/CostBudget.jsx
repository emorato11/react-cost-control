export const CostBudget = ({ budget }) => {
  const formatQuantityValue = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }
  return (
    <div className='container container-budget shadow two-columns'>
      <div>
        <p>Graphic here</p>
      </div>
      <div className='content-budget'>
        <p>
          <span>Budget:</span> {formatQuantityValue(budget)}
        </p>
        <p>
          <span>Available:</span> {formatQuantityValue(0)}
        </p>
        <p>
          <span>Spent:</span> {formatQuantityValue(0)}
        </p>
      </div>
    </div>
  )
}
