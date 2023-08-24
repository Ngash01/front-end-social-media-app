import React from 'react'
import "./profileCard1.scss"
import {FiEdit2} from "react-icons/fi"


const ProfileCard1 = ({handleClick}) => {
  
  return (
    <div className="wrapper">
    <div className='profileCard'>
      <div className="title">
        <strong>Your Info</strong>
        <span onClick={handleClick}>
          <FiEdit2 style={{cursor:"pointer"}}/>
        </span>
      </div>
        <div className='cardStatus'>
          <strong>Status</strong><p> in a relationship</p>
          <strong>Lives in</strong><p> Multan</p>
          <strong>Works at</strong><p> mIcrosoft coorporation</p>
        </div>
        <button>Logout</button>
    </div>
    </div>
  )
}

export default ProfileCard1;


