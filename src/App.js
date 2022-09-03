import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from './Carousel/Js/Carousel';
import NavBar from './NavBar/Js/NavBar';
import { FamilyIndex } from './BirthDayCard/Js/Family/FamilyIndex';
function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
          <NavBar />
        <div className='col-lg-12'>
          <div className='row'>
          <dive className=" col-lg-3  ">
           <FamilyIndex />

            </dive>
            <div className='col-lg-9'>
              <CarouselImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App