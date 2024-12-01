import React  from 'react'

function Header({props}) {
  return (
    <div className='header'>
        <h1>Mon portfolio</h1>
        <button {...props}></button>
    </div>
  )
}

export default Header;