
import React from 'react'


const VideoSection = () => {
  return (
    <div className='relative'>
      <video className='w-full' loop muted autoPlay >
        <source src="/chips.mp4" />
      </video>
    </div>
  )
}

export default VideoSection


