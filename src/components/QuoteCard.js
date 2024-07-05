import React from 'react';

const QuoteCard = ({ quote, fetchQuote, saveQuote }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mb-8 border-2 border-gray-500">
      <img 
        src="https://images.pexels.com/photos/3831729/pexels-photo-3831729.jpeg?auto=compress&cs=tinysrgb&w=800" 
        alt="Ron Swanson" 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="text-xl italic my-4">"{quote}"</p>
      <div className="flex justify-between">
        <button 
          onClick={fetchQuote} 
          className="bg-black text-white px-4 py-2 rounded border border-black hover:bg-opacity-75"
        >
          New Quote
        </button>
        <button 
          onClick={saveQuote} 
          className="bg-black text-white px-4 py-2 rounded border border-black hover:bg-opacity-75"
        >
          Save Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
