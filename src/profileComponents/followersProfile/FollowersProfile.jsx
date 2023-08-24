import React from 'react';
import "./followersProfile.scss"

const FollowersProfile = () => {
  return (
    <div>
    <div className='followersProfile'>
      <div>
        <img className='followersImg' src="Img/img1.png" alt=""/>
      </div>
      <div className="name">
        <p>Andrew Thomas</p>
        <p>@AndrewThomas</p>
      </div>
      <button className='followButton'>Follow</button>
      </div>

      <div className='followersProfile'>
      <div>
        <img className='followersImg' src="Img/img2.png" alt=""/>
      </div>
      <div className="name">
        <p>Jonathan Lynch</p>
        <p>@JonathanLynch</p>
      </div>
      <button className='followButton'>Follow</button>
      </div>

      <div className='followersProfile'>
      <div>
        <img className='followersImg' src="https://assets-global.website-files.com/61dc0796f359b6145bc06ea6/633d83c8cbd0cce86ce8cbe6_TransparentAvatar-WebsiteHero-thumb.png" alt=""/>
      </div>
      <div className="name">
        <p>Anna Belgat</p>
        <p>@AnnaBelgat</p>
      </div>
      <button className='followButton'>Follow</button>
      </div>
    </div>
  )
}

export default FollowersProfile;