import './App.css';

import React, { useState } from 'react'
import Data from './BirthDayCard/Js/Data';
import Family from './BirthDayCard/Js/BirthDay';
import Navbar from './NavBar/Js/NavBar';

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <div className='container-fluid'>
      <div className='row'>
      <Navbar />
    <Family />
      </div>
 
    </div>

  )
}

export default App