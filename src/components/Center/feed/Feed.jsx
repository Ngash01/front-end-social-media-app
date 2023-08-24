import React from 'react'
import SearchBar from '../searchBar/SearchBar';
import Featured from '../featured/Featured';

const Feed = () => {
  return (
    <div className='feed'>
      <SearchBar/>
      <Featured/>
    </div>
  )
}

export default Feed;