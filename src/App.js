import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={saveQuote} />
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
