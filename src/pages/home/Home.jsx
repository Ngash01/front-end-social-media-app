import React from 'react'
import "./Home.scss"
import Profile from '../../components/leftSide/profile/Profile';
import Feed from '../../components/Center/feed/Feed';
import RightSide from '../../components/rightSide/RightSide';

const Home = () => {
  return (
    <div className="home">
      <div className='profile'>
        <Profile/>
      </div>
      <div className="feed">
        <Feed/>
      </div>
      <div className="right">
        <RightSide/>
      </div>
    </div>
  )
}

export default Home;

