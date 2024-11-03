import React from 'react';
import { useNavigate } from "react-router-dom";
import image from '../assets/giphy3.webp'

function Form3() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the "Yes" button click
  const handleYesClick = () => {
    navigate("/form4"); // Redirect to Form4
  };

  // Function to move an element to a random position
  const moveRandomEl = (elm) => {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  };

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

        <h1 className="text-4xl font-bold mt-8">Baby Man jao na! Kitna bhav khaoge 😣</h1>
        <p className="text-xl mt-2">think one more time😝</p>

        <div className="flex space-x-4 mt-8">
          <button
            onClick={handleYesClick} // Use the handleYesClick function
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Yes
          </button>
          <button
            onMouseEnter={(e) => moveRandomEl(e.currentTarget)} // Move on hover
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form3;
