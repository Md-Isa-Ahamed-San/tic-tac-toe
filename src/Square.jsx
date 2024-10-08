import React from 'react';
const Square = ({ value, handleClick }) => {
    return (
      <button 
        className="h-16 w-16 border-2 border-indigo-500 text-2xl font-bold 
        transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 
        focus:ring-indigo-500 focus:ring-offset-2 rounded-lg m-1"
        onClick={handleClick}
      >
        <span className={value === 'X' ? 'text-indigo-600' : 'text-pink-500'}>
          {value}
        </span>
      </button>
    );
  };

export default Square;