import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=' pt-96 px-20 absolute text-white'>
      <h1 className=' text-5xl font-bold'> {title} </h1>
      <p className=' py-8 text-xl w-4/12'> {overview} </p>
      
      <div>
         <button className=" p-3 my-4  w-28  rounded text-black text-xl bg-white hover:bg-opacity-85 ">Play</button>
         <button className=" py-3 px-4 my-4 mx-6 w-32 bg-gray-600 rounded text-white text-xl bg-opacity-90">More info</button>
      </div>

    </div>
  )
}

export default VideoTitle