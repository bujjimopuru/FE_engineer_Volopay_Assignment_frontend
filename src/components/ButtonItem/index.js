import './index.css'

const ButtonItem = props => {
  const {buttonDetails, clickButtonItem , isActive} = props
  const {status, text} = buttonDetails
  const onClickButtonItem = () => {
    clickButtonItem(status)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <div className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickButtonItem}
      >
        {text}
      </button>
    </div>
  )
}

export default ButtonItem