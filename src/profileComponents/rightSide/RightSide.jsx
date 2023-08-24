import React from 'react'
import "./RighSide.scss"

const RightSide = ({handleSearch}) => {
  return (
    <div className='rightSide'>
      <div className='rightIcons'>
        <img src="/Img/home.png" alt="" />
        <img src="/Img/logo.png" alt="" />
        <img src="/Img/noti.png" alt="" />
        <img src="/Img/comment.png" alt="" />
      </div>

      <div className='trends'>
        <h3>Trends for you</h3>
        <div>
          <h4>#Minions</h4>
          <p>97k shares</p>
        </div>
        <div>
          <h4>#Avengers</h4>
          <p>97k shares</p>
        </div>
        <div>
          <h4>#Zainkeepscode</h4>
          <p>80.5k shares</p>
        </div>
        <div>
          <h4>#Reactjs</h4>
          <p>76.5k shares</p>
        </div>
        <div>
          <h4>#Need For speed</h4>
          <p>71k shares</p>
        </div>
        <div>
          <h4>#Elon Musk</h4>
          <p>76.8k shares</p>
        </div>
      </div>
      <button className='AddYours' onClick={handleSearch}>Add Yours</button>
    </div>
  )
}

export default RightSide;