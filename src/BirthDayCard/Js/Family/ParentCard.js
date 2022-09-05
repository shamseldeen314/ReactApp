import React, { useState } from 'react'
import '../../Css/BirthDay.css';
import Data1 from '../../Data/ParentData'
import ParentList from './ParentList';
function ParentCard() {
  const [people, setPeople] = useState(Data1)
  const [state, setState] = useState(false);
  const blockCard = () => {
    setState(() => !state);
  };
  return (
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <div className={people.length > 0 ? " Card" : "Card_height_0"} >
        <ParentList people={people} />
      </div>
      <div className='group_btn_card'>
        <button className='clear_btn' onClick={() => setPeople([])}>clear Parent</button>
        <button className='refresh_btn' onClick={() => setPeople(Data1)}>Parent</button>
      </div>
    </section>
  )
}
export default ParentCard