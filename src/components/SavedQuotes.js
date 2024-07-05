import React from 'react';

const SavedQuotes = ({ savedQuotes }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mb-8 border-2 border-gray-500">
      <h2 className="text-2xl font-bold mb-4">Saved Quotes</h2>
      {savedQuotes.length === 0 ? (
        <p>No quotes saved yet.</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {savedQuotes.map((quote, index) => (
            <li key={index} className="bg-gray-100 px-6 py-4 rounded border border-gray-300">
              {quote}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedQuotes;
