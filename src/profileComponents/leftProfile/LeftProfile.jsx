import './leftProfile.scss';
import {AiOutlineSearch} from "react-icons/ai"
import React from 'react'
import ProfileCard1 from '../profileCard1/ProfileCard1';
import FollowersProfile from '../followersProfile/FollowersProfile';
import {Link} from "react-router-dom"

const LeftProfile = ({handleClick}) => {
  return (
    <div className='profilePage'>
      <div className='topNav'>
        <div>
          <Link to="/">
          <img src="./Img/logo.png" alt="" />
          </Link>
        </div>
        <div className='InputSearch'>
          <input type="text" className='exploreInput' placeholder='#Explore' />
          <AiOutlineSearch className='search'/>
        </div>
      </div>
      <ProfileCard1 handleClick={handleClick}/>
      <p className='follower'>Who is Following you</p>
      <FollowersProfile/>
    </div>
  )
}

export default LeftProfile;