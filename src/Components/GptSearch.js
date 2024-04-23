import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BgImg } from './utils/Constants'

const GptSearch = () => {
  return (
    <>
     <div className="fixed -z-10">
        <img className='h-screen object-cover md:h-[100%] ' src={BgImg} alt="bg-img" />
      </div>
    <div className=''>
<GptSearchBar/>
<GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch