import React from 'react'
import './Featured.scss'

const Featured = () => {
  return (
    <div className='wrapper'>
     <div className='featured'>
      <div className='postPic'>
        <img src="/Img/postpic1.jpg" className='postpicImg' alt="" />
        <div className="crud">
          <img src="/Img/like.png" alt="" />
          <img src="/Img/comment.png" alt="" />
          <img src="/Img/share.png" alt="" />
        </div>
        <p className='likes'>2300 likes</p>
        <strong>MaryAnne</strong> Party Time<p></p>
      </div>
     </div> 

     <div className='featured'>
      <div className='postPic'>
        <img src="/Img/postpic2.jpg" className='postpicImg' alt="" />
        <div className="crud">
          <img src="/Img/like.png" alt="" />
          <img src="/Img/comment.png" alt="" />
          <img src="/Img/share.png" alt="" />
        </div>
        <p className='likes'>500 likes</p>
        <strong>Anna Becky</strong> serious face<p></p>
      </div>
     </div>

     <div className='featured'>
      <div className='postPic'>
        <img src="/Img/postpic3.jpg" className='postpicImg' alt="" />
        <div className="crud">
          <img src="/Img/notlike.png" alt="" />
          <img src="/Img/comment.png" alt="" />
          <img src="/Img/share.png" alt="" />
        </div>
        <p className='likes'>2300 likes</p>
        <strong>Alicia Yu</strong> San Antonio, Brasilia<p></p>
      </div>
     </div>  
    </div>
  )
}


export default Featured;