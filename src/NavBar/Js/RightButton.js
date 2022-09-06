import React from "react";
// import React, { useState, useEffect } from "react";
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { RiEnglishInput } from 'react-icons/ri';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import '../Css/RightButton.css'
import UserIcon from "../Images/UserIcon.jpg"

function RightButton() {
  return (
    <div className='groupIcon'>

      <button className="btnIcon">
        <AiOutlineArrowsAlt />
      </button>

      <button className="btnIcon" >
        <RiEnglishInput />
      </button>

      <button className='btnIcon'>
        <MdOutlineNotificationsNone />
        <li className='LiChild1'>
          <span className='NotiicationNumber'>3</span>
        </li>
      </button>

      <button className='btnIcon'>
        <FiMessageSquare />
        <li className='LiChild2'>
        </li>
      </button>

      <div className='image'>
        <img className='User_Icon' src={UserIcon} />
      </div>

    </div>
  );
}
export default RightButton