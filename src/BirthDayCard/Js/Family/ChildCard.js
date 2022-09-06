import React, { useState } from 'react'
import '../../Css/BirthDay.css';
import Data2 from '../../Data/ChildData'
import ChildList from './ChildList';
function ChildCard() {
    const [children, setChildren] = useState(Data2)
    const [state, setState] = useState(false);
    const blockCard = () => {
        setState(() => !state);
    };
    return (
        <section className='container'>
            <h3>{children.length} birthdays today</h3>
            <div className={children.length > 0 ? " Card" : "Card_height_0"} >
                <ChildList children={children} />
            </div>
            <div className='group_btn_card'>
                <button className='clear_btn c_Btn' onClick={() => setChildren([])}>clear children</button>
                <button className='refresh_btn r_Btn' onClick={() => setChildren(Data2)}>children</button>
            </div>
        </section>
    )
}
export default ChildCard