import React from 'react'
import "./middleBar.scss"
import SearchBar from '../searchBar/SearchBar';

const MiddleBar = () => {
  return (
    <div className='wrapper' >
    <div className='middleBar'>
      <div className="images">
        <img src="/Img/cover.jpg" alt="" />
        <img src="/Img/img3.png" alt="" />
      </div>

      <div className='userInfo'>
        <strong>Zendaya Mj</strong>
        <p>Senior UI/UX designer</p>
      </div>

      <hr />
      <div className='numbers'>
        <div className='leftSide'>
          <strong>6867</strong>
          <p>Followers</p>
        </div>
        <hr />
        <div className='rightSide'>
          <strong>1</strong> 
          <p className='rightSideFollow'>Following</p>
        </div>
      </div>
      <hr />

      <strong className="footer">
        My Profile
      </strong>
      </div>
      <SearchBar/>
    </div>
  )
}

export default MiddleBar;