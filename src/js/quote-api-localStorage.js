import axios from 'axios';
import { getQuoteOfTheDay } from './api-functions';

// Get today day
export const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Get day for the quote
export const handleGetQuoteOfTheDay = async () => {
  const storedQuote = JSON.parse(localStorage.getItem('quoteOfTheDay'));
  const today = getTodayDate();

  if (storedQuote && storedQuote.date === today) {
    // console.log("Already have today's quote:", storedQuote);
    return storedQuote;
  }
  const quote = await getQuoteOfTheDay();

  const quoteWithDate = {
    ...quote,
    date: today,
  };

  localStorage.setItem('quoteOfTheDay', JSON.stringify(quoteWithDate));

  return quoteWithDate;
};
