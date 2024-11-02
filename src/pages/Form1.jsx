import React from 'react';
import { useNavigate } from "react-router-dom";
import image from '../assets/giphy1.webp'; // Ensure you have the correct path for your image

function Form1() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the "No" button click
  const handleNoClick = () => {
    navigate("/form2"); // Redirect to Form2
  };

  // Function to handle the "Yes" button click
  const handleYesClick = () => {
    navigate("/form4"); // Redirect to Form4
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffe5e5]">
      <div className="container flex flex-col text-center items-center gap-5 max-w-[500px] m-5 p-5 bg-white rounded-lg shadow-lg">
        {/* Replace the Tenor embed code with an image */}
        <img
          src={image} // Use the imported image
          alt="Mochi Sticker" // Provide alt text for accessibility
          className="max-w-[200px] w-full mr-10" // Ensure the image is responsive
        />
        
        <h1 className="text-4xl font-bold mt-8">Please think again! 🙄</h1>
        <p className="text-xl mt-2">itni jaldi nahi matt bolo😥</p>

        <div className="flex space-x-4 mt-8">
          <button
            onClick={handleYesClick} // Use the handleYesClick function
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Yes
          </button>
          <button
            onClick={handleNoClick} // Use the handleNoClick function
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form1;
