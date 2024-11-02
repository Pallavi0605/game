import React from 'react';
import { useNavigate } from "react-router-dom";
import image from '../assets/giphy2.webp'

function Form2() {

    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle the "No" button click
    const handleNoClick = () => {
      navigate("/form3"); // Redirect to Form1
    };
  
    // Function to handle the "Yes" button click
    const handleYesClick = () => {
      navigate("/form4"); // Redirect to Form4
    };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffe5e5]">
      <div className="container flex flex-col text-center items-center gap-5 max-w-[500px] m-5">
      <div className="flex justify-center mb-4 mt-10"> 
          <img
            src={image}
            alt="Animated sticker of affection"
            className="w-full h-auto mr-2" // Margin right for spacing
          />
        </div>

        <h1 className="text-4xl font-bold mt-8">Ek aur baar Soch lo! 😣</h1>
        <p className="text-xl mt-2">kyu aisa kar rahi ho 😣</p>

         <div className="flex space-x-4 mt-8">
          <button
            onClick={handleYesClick} // Use the handleYesClick function
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Yes
          </button>
          <button
            onClick={handleNoClick} // Use the handleNoClick function
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form2