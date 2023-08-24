import React from 'react'
import './profilePage.scss'
import LeftProfile from '../../profileComponents/leftProfile/LeftProfile';
import MiddleBar from '../../profileComponents/middleBar/MiddleBar';
import RightSide from '../../profileComponents/rightSide/RightSide';
import { useState } from 'react';
import ProfileModal from './profileModal';
import ShareModal from '../../profileComponents/shareModalSearch/ShareModal';

const ProfilePage = () => {

  const [showPopup, setShowPopup] = useState(false)
  const [showSearch, setShowSearch] = useState(false)


  const handleClick = ()=>{
    setShowPopup((curr)=>curr === false ? true: false)
  }

  const handleSearch = ()=>{
    setShowSearch((curr)=>curr === false ? true: false)
  }

  const restoreDefault = ()=>{
    if(showPopup){
      setShowPopup(false)
    }
    else if(showSearch){
      setShowSearch(false)
    }
  }

  return (
    <div  className='profile'>
    <div className='proFilePage'>
      <div className="left" onClick={restoreDefault} style={{backgroundColor: `${showPopup || showSearch ? "white" :""}`, opacity: `${showPopup || showSearch ? "10%": ""}`}}>
        <LeftProfile handleClick={handleClick}/>
      </div>
      {
        showPopup || showSearch ? (
          showPopup ? <ProfileModal restoreDefault={restoreDefault}/> : <ShareModal restoreDefault={restoreDefault}/>
        ): (
          <div className='center'>
            <MiddleBar restoreDefault={restoreDefault}/>
          </div>
        )
      }
      <div className="right" onClick={restoreDefault} style={{backgroundColor: `${showPopup || showSearch ? "white" :""}`, opacity: `${showPopup || showSearch ? "10%": ""}`}} >
      <RightSide handleSearch={handleSearch}/>
      </div>
    </div> 
  </div>
  )
}

export default ProfilePage;


// {
//   showPopup || showSearch ? (
//     showPopup ?  <ProfileModal restoreDefault={restoreDefault}/> : <ShareModal/> 
//   ):
//   <div className='center'>
//     <MiddleBar/>
//   </div>
// }



