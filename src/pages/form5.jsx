import React from 'react'
import image from '../assets/giphy4.webp'

function form5() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffe5e5]">
      <div className="container flex flex-col text-center items-center gap-5 max-w-[500px] m-5 p-5 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-4 mt-10"> 
          <img
            src={image}
            alt="Animated sticker of affection"
            className="w-full h-auto mr-2" // Margin right for spacing
          />
        </div>
        <h1 className="text-4xl font-bold mt-8">Hehehehe, I  Love you a lot my girl 😘</h1>
        <p className="text-lg text-gray-500">You are the sunshine that brightens   </p>
        
      </div>
    </div>
  )
}

export default form5