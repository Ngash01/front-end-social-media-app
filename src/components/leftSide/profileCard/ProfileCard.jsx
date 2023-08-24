import React from 'react'
import "./profileCard.scss"

const ProfileCard = () => {
  return (
    <div className='profileCard'>
      <div className="profileImages">
        <img src="/Img/cover.jpg" alt="" />
        <img src="/Img/img3.png" alt="" />
      </div>
      <div className="profileName">
        <span>Zendaya Mj</span>
        <span>Senior UI/UX designer</span>
      </div>
      <hr />
      <div className='numbers'>
        <div className='followers'>
          <p>6866</p>
          <p>Followers</p>
        </div>
        <hr />
        <div className="following">
          <p>1</p>
          <p>Following</p>
        </div>
      </div>
      <hr />
      <p className='Userstatus'>My Profile</p>
    </div>
  )
}

export default ProfileCard;


