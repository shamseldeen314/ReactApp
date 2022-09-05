import React from 'react'

import "../Css/NavBar.css"
import LogoApp from './LogoApp'
import SearchInput from './SearchInput'
import RightButton from './RightButton'
import ButtonGroup from './ButtonGroup'

function NavBar() {
  return (
    <div className='col-lg-12 NavBar'>
      <div className='row'>
        <div className='col-lg-2 LogoApp'>
          <LogoApp />
        </div>
        <div className='col-lg-7'>
          <SearchInput />
        </div>
        <div className='col-lg-3 RightButton'>
          <RightButton />
        </div>
        <div className='col-lg-12 ButtonGroup'>
          <ButtonGroup />
        </div>
      </div>
    </div>
  )
}

export default NavBar