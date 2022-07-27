import './MainComponentTitle.css'

function MainComponentsHead({ componentTitle }) {
  return (
    <div className='main-component__head'>
      <h2 className='main-component__title'>{componentTitle}</h2>
    </div>
  )
}

export default MainComponentsHead;
