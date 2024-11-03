import React from "react";
import { useNavigate } from "react-router-dom"; 
import image from "../assets/giphy.webp"; 

function Form() {
  const navigate = useNavigate(); 

  const handleNoClick = () => {
    navigate("/form1"); 
  };

  const handleYesClick = () => {
    navigate("/form4"); 
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

        <h1 className="text-4xl font-bold mt-4 ">Do you love me? 🤗</h1>
        {/* <p>for you Aditya 😉   </p> */}

        <div className="flex space-x-4 mt-8">
          <button
            onClick={handleYesClick}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
