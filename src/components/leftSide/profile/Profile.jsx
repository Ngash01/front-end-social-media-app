import React from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import './Profile.scss'
import ProfileCard from '../profileCard/ProfileCard';
import FollowersProfile from '../followersProfile/FollowersProfile';

const Profile = () => {
  return (
    <div className='profilePage'>
      <div className='topNav'>
        <div>
          <img src="./Img/logo.png" alt="" />
        </div>
        <div className='InputSearch'>
          <input type="text" className='exploreInput' placeholder='#Explore' />
          <AiOutlineSearch className='search'/>
        </div>
      </div>
      <ProfileCard/>
      <p className='follower'>Who is Following you</p>
      <FollowersProfile/>
    
    </div>
  )
}

export default Profile;