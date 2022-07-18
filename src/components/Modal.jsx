import CloseBtnIcon from '../img/cerrar.svg'

export const Modal = ({ setModal, animation, setAnimation }) => {
  const hideModal = () => {
    setAnimation(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }
  return (
    <div className='modal'>
      <div className='close-modal'>
        <img src={CloseBtnIcon} alt='close btn' onClick={hideModal} />
      </div>
      <form className={`form ${animation ? 'animation' : 'close'}`}>
        <legend>New Expenditure</legend>

        <div className='field'>
          <label htmlFor='name'>Expenditure Name</label>
          <input id='name' type='text' placeholder='Add the Expenditure Name' />
        </div>
        <div className='field'>
          <label htmlFor='quantity'>Quantity</label>
          <input id='quantity' type='number' placeholder='Add the Expenditure Quantity' />
        </div>
        <div className='field'>
          <label htmlFor='category'>Category</label>
          <select name='' id='category'>
            <option value=''>-- Select an option --</option>
            <option value='savings'>Savings</option>
            <option value='food'>Food</option>
            <option value='home'>Home</option>
            <option value='common-expenditures'>Common Expenditures</option>
            <option value='leisure'>Leisure</option>
            <option value='health'>Health</option>
            <option value='subscriptions'>Subscriptions</option>
          </select>
        </div>
        <input type='submit' value='Add expenditure' />
      </form>
    </div>
  )
}
