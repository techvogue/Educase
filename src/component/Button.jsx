import React from 'react';

const Button = ({ text, buttonColor, textColor = 'white', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full text-sm sm:text-base md:text-md lg:text-lg xl:text-xl font-medium py-4 md:py-3 lg:py-3 px-6 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50 cursor-pointer"
      style={{ backgroundColor: buttonColor, color: textColor }}
    >
      {text}
    </button>
  );
};

export default Button;

