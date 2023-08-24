import React from 'react'
import "./profileModal.scss"
import { Link } from 'react-router-dom';

const ProfileModal = ({restoreDefault}) => {
  return (
    <div className="right">
      <div className='topRight'>
        <h3>Your Info</h3>
        <p onClick={restoreDefault} style={{cursor:"pointer"}}>X</p>
      </div>
        <div className='inputForm'>
          <div className="names">
            <input className='input1' type='text' placeholder='First Name'/>
            <input className='input1' type='text' placeholder='Last Name'/>
          </div>
          <input className='input1' type="text" placeholder='Works at...'/>
          <div className="names">
            <input className='input1' type='text' placeholder='Lives In'/>
            <input className='input1' type='text' placeholder='Country'/>
          </div>
          <input className='input1' type="text" placeholder='Relationship Status'/>
         <div className='imagesProfileCover'>
          <p>Profile Image</p>
          <input type="file" />
          <p>Cover Image</p>
          <input type="file" />
         </div>
        </div>
        <div className='logins'>
          <button>Update</button>
        </div>
      </div>
  )
}

export default ProfileModal;


