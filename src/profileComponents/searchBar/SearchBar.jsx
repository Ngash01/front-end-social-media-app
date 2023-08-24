import React from 'react';
import "./searchBar.scss"
import {HiOutlinePhotograph} from "react-icons/hi";
import {MdOutlineSlowMotionVideo} from "react-icons/md"
import {GrLocation} from "react-icons/gr";
import { useState, useRef } from 'react';
import {MdOutlineCancel} from "react-icons/md"

const SearchBar = () => {

  const [image, setImage] = useState(null)
  const imageRef = useRef();

  const handleChange = (e)=>{
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0]
      setImage({
        image: URL.createObjectURL(img)
      })
    }
  }

  return (
    <div className="wrapper">
    <div className="searchBar">
      <img src="/Img/img3.png" className='imgProfile' alt="" />
      <div className='InputBar'>
        <input type="text" className='searchInput' placeholder="What's happening?"/>
        <div className='media'>
          <div className="mediaIcons" onClick={()=>imageRef.current.click()}>
            <HiOutlinePhotograph/>
            <p>Photo</p>
          </div>
          <div className="mediaIcons">
            <MdOutlineSlowMotionVideo/>
            <p>Video</p>
          </div>
          <div className="mediaIcons">
            <GrLocation/>
            <p>Location</p>
          </div>
          <button className='ps-button'>Share</button>
          <div style={{display:"none"}}>
            <input type="file" name='myImg' ref={imageRef} onChange={handleChange}/>
          </div>
        </div>
        {image && (
          <div className='previewImage'>
            <MdOutlineCancel className='mdoutline' onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default SearchBar;


