import './index.css'

const TabItem = props => {
  const {tabDetails, onActiveTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const isActiveClassName = isActive ? 'active' : ''

  const onClickTab = () => {
    onActiveTab(tabId)
  }

  return (
    <li className="list-card">
      <button
        className={`card-btn ${isActiveClassName}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
